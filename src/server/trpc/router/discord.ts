import { z } from "zod"
import { procedurePublic, router, procedureRegistered } from "../utils"
import { serverEnv } from "~/env/server"


export default router({

    poke: procedureRegistered
        .input(z.object({
            message: z.string(),
        }))
        .query(async ({ ctx, input }) => {

            const finalAnalysis = await _pokeDiscord(`@${ctx.session.user.displayName} says: ${input.message}`)

            console.log(`discord.ts poke: ${JSON.stringify(finalAnalysis, null, 4)}`)

            return `Poke received: ${input.message}`
        }),






    getCurrentUser: procedureRegistered
        .query(async ({ ctx }) => {
            const discordUser = await _getCurrentUser()

            console.log(`\ndiscord.ts getCurrentUser discordUser: ${JSON.stringify(discordUser, null, 4)}`)

            return discordUser
        }
        ),




    getActiveThreads: procedureRegistered
        .query(async ({ ctx }) => {
            const discordThreads = await _getActiveThreads()

            // console.log(`discord.ts getActiveThreads: ${JSON.stringify(discordThreads, null, 4)}`)

            return discordThreads
        }
        ),




})




async function _pokeDiscord(sayWhatNow: string) {

    const headersList = {
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded"
    }

    const bodyContent = `content=${sayWhatNow}`

    const responseDiscord = fetch(`${serverEnv.DISCORD_WEBHOOK_PROBATIOTRON_URL}`, {
        method: "POST",
        body: bodyContent,
        headers: headersList
    })

    // const discordData = responseDiscord.text()

    console.log(`\ndiscord.ts _pokeDiscord discordData: ${responseDiscord}`)

    return responseDiscord

}





async function _getCurrentUser() {

    const headersList = {
        "Accept": "*/*",
        // "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bot ${serverEnv.DISCORD_BOT_TOKEN}`
    }

    const discordCurrentMemberUrl = `https://discord.com/api/users/@me`



    const responseDiscord = fetch(`${discordCurrentMemberUrl}`, {
        method: "GET",
        headers: headersList
    })

    const discordData = (await responseDiscord).json()

    console.log(`\ndiscord.ts _getCurrentUser discordData: ${JSON.stringify(discordData, null, 4)}`)

    // console.log(`\ndiscord.ts _getCurrentUser discordData: ${discordData}`)

    return responseDiscord

}




async function _getActiveThreads() {

    const headersList = {
        "Accept": "*/*",
        "Authorization": `Bot ${serverEnv.DISCORD_BOT_TOKEN}`
    }

    const activeThreadResponse = await fetch(`https://discordapp.com/api/guilds/${serverEnv.DISCORD_GUILD_ID}/threads/active`, {
        method: "GET",
        headers: headersList
    })

    // TODO: de-magick this, on first test this is showing all threads even admin stuff to general users
    const allowedChannels = [ '1053460429424316449' ]
    // https://discord.com/channels/1053460428413472910/1053460429424316449

    let activeThreadData = await activeThreadResponse.json()

    // console.log(`discord.ts _getActiveThreads activeThreadData: ${JSON.stringify(activeThreadData, null, 4)}`)
    
    activeThreadData.threads = activeThreadData.threads.filter((thread: any) => allowedChannels.includes(thread.parent_id))

    // console.log(`discord.ts _getActiveThreads activeThreadDataAllowedChannels: ${JSON.stringify(activeThreadData, null, 4)}`)

    const channelIds = activeThreadData.threads.map((thread: any) => thread.parent_id)

    // console.log(`discord.ts _getActiveThreads channelIds: ${JSON.stringify(channelIds, null, 4)}`)

    const channelNames = await _getChannelNames(channelIds)

    const activeThreads = activeThreadData.threads.map((thread: any, index: number) => {
        return {
            ...thread,
            channelName: channelNames[index]
        }
    })

    // console.log(`\ndiscord.ts _getActiveThreads activeThreads: ${JSON.stringify(activeThreads, null, 4)}`)

    console.log(`\ndiscord.ts _getActiveThreads activeThreads.length: ${activeThreads?.length}`)

    return activeThreads

}



async function _getChannelNames(channelIds: string[]) {

    const headersList = {
        "Accept": "*/*",
        "Authorization": `Bot ${serverEnv.DISCORD_BOT_TOKEN}`
    }

    const channelNames: string[] = []

    for (const channelId of channelIds) {
        const channelResponse = await fetch(`https://discordapp.com/api/channels/${channelId}`, {
            method: "GET",
            headers: headersList
        })

        const channelData = await channelResponse.json()

        channelNames.push(channelData.name)
    }

    // console.log(`discord.ts _getChannelNames channelNames: ${JSON.stringify(channelNames, null, 4)}`)

    console.log(`\ndiscord.ts _getChannelNames channelNames.length: ${channelNames?.length}`)

    return channelNames

}
