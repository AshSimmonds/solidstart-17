import { Switch, Match } from "solid-js"
import { createServerData$ } from "solid-start/server"
// import { authenticator } from "~/server/auth"

export const userObjectPromise = () => createServerData$(async (_, { request }) => {
        const user = undefined // await authenticator.isAuthenticated(request)

        if (!user) {
            return {
                displayName: 'Visitor' as string,
                avatar: '' as string,
            }
        }

        return user
    })


export default function Avatar() {
    const user = userObjectPromise()

    return (
        <Switch
            fallback={
                <>?</>
            }
        >
            <Match when={user.loading}>
                <>...</>
            </Match>

            <Match when={user()?.avatar}>
                <><img src={user()?.avatar} alt={`${user()?.displayName} avatar`} /></>
            </Match>
        </Switch>
    )

}
