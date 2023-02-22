import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start"
// import Github from "@auth/core/providers/github"
import Discord from "@auth/core/providers/discord"
import Auth0Provider from "@auth/core/providers/auth0";

import { serverEnv } from "~/env/server"
import { useNavigate } from "solid-start";

// TODO: get rid of magick numbers
const roleCaptain = '1053489393740029962'
const roleAdmin = '1053715007306739833'
const roleCoach = '1061882595060756510'

export type User = {
    id: string
    email: string
    userName: string
    displayName: string
    locale?: string
    avatar?: string
    admin: boolean
    coach: boolean
    captain: boolean
    memberDetails: any
}


export const authOpts: SolidAuthConfig = {

    callbacks: {
        async jwt({ token, user }) {
            const thisFunctionName = "\n\n[...solidauth].ts callbacks jwt | "

            if (user) {
                token = {
                    ...token,
                    user: user,
                };
            }

            return token
        },


        async session({ session, user, token }) {
            const thisFunctionName = "\n\n[...solidauth].ts callbacks session | "

            if (session.user) {

                if (!session.user.id) {
                    if (token.sub) {
                        session.user.id = token.sub
                    }
                }

            }

            return {
                ...session,
                ...token
            }
        },
    },




    providers: [
        // @ts-expect-error 
        // https://discordapp.com/channels/722131463138705510/1076736408301097023/1076806213519548476
        Auth0Provider({
            clientId: serverEnv.AUTH0_CLIENT_ID,
            clientSecret: serverEnv.AUTH0_CLIENT_SECRET,
            issuer: serverEnv.AUTH0_DOMAIN,
        }),

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore types error
        // Github({
        //   clientId: serverEnv.GITHUB_ID,
        //   clientSecret: serverEnv.GITHUB_SECRET,
        // }),
        Discord({
            clientId: serverEnv.DISCORD_CLIENT_ID,
            clientSecret: serverEnv.DISCORD_CLIENT_SECRET,
            profile: async (profile) => {
                const thisFunctionName = "\n\n[...solidauth].ts providers discord profile | "

                console.log(`${thisFunctionName}\n`, JSON.stringify(profile, null, 4))

                const memberDetails = await _getMemberDetails(profile.id)

                // let user = users.find((u) => u.id === profile.id)

                // if (!user) {
                const user = {
                    id: profile.id,
                    email: profile.email,
                    userName: profile.username,
                    displayName: memberDetails.nick ? memberDetails.nick : profile.username,
                    locale: profile.locale,
                    avatar: profile.avatar,
                    admin: memberDetails.roles.includes(roleAdmin),
                    coach: memberDetails.roles.includes(roleCoach),
                    captain: memberDetails.roles.includes(roleCaptain),
                    memberDetails: memberDetails,
                }
                // users.push(user)
                // }


                if (!user) {
                    console.error(`${thisFunctionName} user not found`)
                    throw new Error("User not found")
                }

                return user

            }
        }


        ),
    ],
    debug: false,
}

export const { GET, POST } = SolidAuth(authOpts)








async function _getMemberDetails(memberId: string) {
    const thisFunctionName = "\n\n[...solidauth].ts _getMemberDetails | "
    // console.log(`${thisFunctionName} memberId: ${memberId}`)

    const headersList = {
        "Accept": "*/*",
        "Authorization": `Bot ${serverEnv.DISCORD_BOT_TOKEN}`
    }

    const discordGuildMemberUrl = `https://discord.com/api/guilds/${serverEnv.DISCORD_GUILD_ID}/members/${memberId}`

    console.log(`${thisFunctionName} discordGuildMemberUrl:\n ${discordGuildMemberUrl}`)

    const response = await fetch(`${discordGuildMemberUrl}`, {
        method: "GET",
        headers: headersList
    })

    const discordData = await response.json()

    console.log(`${thisFunctionName} discordData:\n ${JSON.stringify(discordData, null, 4)}`)

    // "Unknown Guild" - user likely not a part of Discord server
    // if (discordData.code === 10004) {
    //     console.error(`${thisFunctionName} Unknown Guild`)

    //     return {
    //         roles: [],
    //         nick: null
    //     }
    // } else {
        return discordData
    // }
}



