import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start"
// import Github from "@auth/core/providers/github"
import Discord from "@auth/core/providers/discord"
import { serverEnv } from "~/env/server"

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

            console.log(`\n\n[...solidauth].ts / callbacks jwt /\ntoken:\n ${JSON.stringify(token, null, 4)}`);

            console.log(`\n\n[...solidauth].ts / callbacks jwt /\nuser:\n ${JSON.stringify(user, null, 4)}`);

            if (user) {
                token = {
                    ...token,
                    user: user,
                };
            }

            return token
        },




        async session({ session, user, token }) {

            console.log(`\n\n[...solidauth].ts / callbacks session /\ntoken:\n ${JSON.stringify(token, null, 4)}`);

            console.log(`\n\n[...solidauth].ts / callbacks session /\nuser:\n ${JSON.stringify(user, null, 4)}`);

            if (session.user) {

                // session.user.lastActive = Date.now()

                if (!session.user.id) {
                    if (token.sub) {
                        session.user.id = token.sub
                    }
                }

            }

            console.log(`\n\n([...solidauth].ts / callbacks session / session:\n ${JSON.stringify(session, null, 4)}`);

            return {
                ...session,
                ...token
            }
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // adapter: PrismaAdapter(prisma) as any,


    providers: [
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

                console.log(`\n\napi / auth / [...solidauth].ts / profile\n`, JSON.stringify(profile, null, 4))

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

                console.log(`\n\napi / auth / [...solidauth].ts / user\n`, JSON.stringify(user, null, 4))

                // console.log(`auth.ts authenticator user: ${JSON.stringify(user, null, 4)}`)

                if (!user) {
                    console.error(`\n\napi / auth / [...solidauth].ts / user not found`)
                    throw new Error("User not found")
                }

                // const userLoginLogResponse = trpc.userRouter.logLogin.useQuery(() => ({ userId: user.id, displayName: user.displayName }))

                // const userLoginLogResponse = await userRouter.logLogin.fetch({ userId: user.id, displayName: user.displayName })

                // const updatedPlanForm = await planRouter.updatePlan.fetch({ planForm: thePlan() })

                const userLoginLogResponse = await _logUserLogin(user)

                console.log(`\n\napi / auth / [...solidauth].ts userLoginLogResponse: ${JSON.stringify(userLoginLogResponse, null, 4)}`)

                const discordResponse = _pokeDiscord(`**${user.displayName}** (user#${user.id}) just logged in.`)

                console.log(`\n\napi / auth / [...solidauth].ts discordResponse: ${JSON.stringify(discordResponse, null, 4)}`)

                return user


                // }
                // catch (error) {
                //     console.error(`auth.ts authenticator error: ${JSON.stringify(error, null, 4)}`)
                //     return error
                // }
            }
        }


        ),
    ],
    debug: false,
}

export const { GET, POST } = SolidAuth(authOpts)















async function _getMemberDetails(memberId: string) {

    const headersList = {
        "Accept": "*/*",
        "Authorization": `Bot ${serverEnv.DISCORD_BOT_TOKEN}`
    }

    const discordGuildMemberUrl = `https://discord.com/api/guilds/${serverEnv.DISCORD_GUILD_ID}/members/${memberId}`

    console.log(`\n\napi / auth / [...solidauth].ts / _getMemberDetails discordGuildMemberUrl:\n ${discordGuildMemberUrl}`)

    const response = await fetch(`${discordGuildMemberUrl}`, {
        method: "GET",
        headers: headersList
    })

    const discordData = await response.json()

    console.log(`\n\napi / auth / [...solidauth].ts / getMemberRolesDiscord discordData:\n ${JSON.stringify(discordData, null, 4)}`)

    // const navigate = useNavigate()

    // if (discordData.code === 10007) {
    //     console.log(`auth.ts _getMemberDetails redirecting to https://discord.gg/kCJgEzAz`)

    //     navigate(`https://discord.gg/kCJgEzAz`)
    // } else {
    //     console.log(`auth.ts _getMemberDetails discordData: ${JSON.stringify(discordData, null, 4)}`)

    return discordData
    // }

}




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

    // console.log(`discord.ts _pokeDiscord discordData: ${discordData}`)

    return responseDiscord

}



