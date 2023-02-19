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


            <div>
                <Switch>
                    <Match when={user()}>





                        <XCOMOperationBriefing
                            title="Discord active threads"
                        >

                            <Show when={discordActiveThreads().data}>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                title
                                            </th>
                                            <th>
                                                channel
                                            </th>
                                            <th>
                                                created
                                            </th>
                                            <th>
                                                posts
                                            </th>
                                        </tr>
                                        <For each={discordActiveThreads().data}>
                                            {(theThread: {
                                                id: string,
                                                guild_id: string,
                                                name: string,
                                                channelName: string,
                                                last_message_id: string,
                                                member_ids_preview: string[],
                                                message_count: number,
                                                owner_id: string,
                                                parent_id: string,
                                                thread_metadata: {
                                                    archived: boolean,
                                                    create_timestamp: string,
                                                    locked: boolean,
                                                },
                                                total_message_sent: number,
                                            }, threadIndex) => (
                                                <tr>
                                                    <td>
                                                        {threadIndex() + 1}
                                                    </td>
                                                    <td>
                                                        <a href={`https://discord.com/channels/${theThread.guild_id}/${theThread.id}/${theThread.last_message_id}`} target="_blank">{theThread.name}</a>
                                                    </td>
                                                    <td>
                                                        {theThread.channelName}
                                                    </td>
                                                    <td class="font-mono text-sm whitespace-nowrap">
                                                        {new Date(theThread.thread_metadata.create_timestamp).toLocaleString()}
                                                    </td>
                                                    <td>
                                                        {theThread.message_count}
                                                    </td>
                                                </tr>
                                            )}
                                        </For>
                                    </tbody>
                                </table>
                            </Show>


                            {/* <pre>
                                {JSON.stringify(discordActiveThreads().data, null, 4)}
                            </pre> */}


                        </XCOMOperationBriefing>







                    </Match>
                </Switch>
            </div>

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
