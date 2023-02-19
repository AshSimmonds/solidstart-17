import type { VoidComponent } from "solid-js";
import { Switch, Match, Show, For } from "solid-js"
import { A, Title } from "solid-start"
import { trpc } from "~/utils/trpc"
import { createServerData$ } from "solid-start/server"
import Layout from "~/layouts/Layout"
import { createSignal } from "solid-js"
import XCOMOperationBriefing from "~/components/XCOMOperationBriefing"
import { getSession } from "@auth/solid-start"
import { authOpts } from "./api/auth/[...solidauth]"
import LogInOutButton from "~/components/LogInOutButton"
import Avatar from "~/components/Avatar";



const useSession = () => {
    return createServerData$(
        async (_, { request }) => {
            return await getSession(request, authOpts)
        },
        { key: () => ["auth_user"] }
    )
}



const ProfilePage: VoidComponent = () => {
    const session = useSession()
    const user = () => session()?.user

    // if (!user) {
    //     return (
    //         <Layout>
    //             <Title>Profile</Title>
    //             <h1>Profile</h1>
    //             <LogInOutButton />
    //         </Layout>
    //     )
    // }

    // const res = trpc.exampleRouter.secret.useQuery(undefined, {
    //     get enabled() {
    //         return !!user()
    //     },
    // })

    const [discordUser, setDiscordUser] = createSignal(trpc.discordRouter.getCurrentUser.useQuery())

    const [discordActiveThreads, setDiscordActiveThreads] = createSignal(trpc.discordRouter.getActiveThreads.useQuery())


    return (
        <Layout>
            <Title>Profile</Title>
            <h1>Profile {user() && `: ${user()?.displayName}`}</h1>

            <LogInOutButton class="float-right" />

            <Avatar />


            <h2>
                user() metadata
            </h2>
            <pre>
                {JSON.stringify(user(), null, 4)}
            </pre>

        </Layout>
    )
}

export default ProfilePage
