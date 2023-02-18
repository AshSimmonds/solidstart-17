import { getSession } from "@auth/solid-start"
import { Switch, Match } from "solid-js"
import { createServerData$ } from "solid-start/server"
import { authOpts } from "~/routes/api/auth/[...solidauth]"
// import { authenticator } from "~/server/auth"

const useSession = () => {
    return createServerData$(
        async (_, { request }) => {
            return await getSession(request, authOpts)
        },
        { key: () => ["auth_user"] }
    )
}

export const userObjectPromise = () => createServerData$(async (_, { request }) => {
    const session = useSession()
    const user = () => session()?.user

        if (!user()) {
            return {
                displayName: 'Visitor' as string,
                avatar: '' as string,
            }
        }

        return user
    })


export default function Avatar() {
    const session = useSession()
    const user = () => session()?.user

    return (
        <Switch
            fallback={
                <>?</>
            }
        >
            {/* <Match when={session.loading}>
                <>...</>
            </Match> */}

            <Match when={user()?.avatar}>
                <img src={`https://cdn.discordapp.com/avatars/1060128397688307764/${user()?.avatar}.webp?size=160`} alt={`${user()?.displayName} avatar`} class="mask mask-circle" />
            </Match>
        </Switch>
    )

}
