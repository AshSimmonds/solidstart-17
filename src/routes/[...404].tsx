import { A, Title } from "solid-start"
import Layout from "~/layouts/Layout"
import { getSession } from "@auth/solid-start"
import { createServerData$ } from "solid-start/server"
import { authOpts } from "~/routes/api/auth/[...solidauth]"
import { Show } from "solid-js"

export const useSession = () => {
    return createServerData$(
        async (_, { request }) => {
            return await getSession(request, authOpts)
        },
        { key: () => ["auth_user"] }
    )
}

export default function NotFound() {
    const session = useSession()
    const loading = session.loading
    const user = () => session()?.user

    return (
        <Layout>
            <div class="text-center mx-auto">
                <Title>Lost in space</Title>
                <h1 class="mt-12">
                    <A href="/" class="btn btn-outline btn-warning text-4xl" >404 | Not Found</A>
                </h1>

                <Show when={user()}>
                    <h2>user()</h2>
                    <pre class="text-left">
                        {JSON.stringify(user(), null, 4)}
                    </pre>
                </Show>

                <h2>Loading: {loading}</h2>

                <h2>session()</h2>
                <pre class="text-left">
                    {JSON.stringify(session(), null, 4)}
                </pre>
            </div>
        </Layout>
    )
}
