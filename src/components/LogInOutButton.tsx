import { Show } from "solid-js";
import type { Component, JSX } from "solid-js"
import { Button } from "@kobalte/core"
import { signIn, signOut } from "@auth/solid-start/client";
import { createServerData$ } from "solid-start/server";
import { getSession } from "@auth/solid-start";
import { authOpts } from "~/routes/api/auth/[...solidauth]";

const useSession = () => {
    return createServerData$(
        async (_, { request }) => {
            return await getSession(request, authOpts)
        },
        { key: () => ["auth_user"] }
    )
}

interface LogInOutButtonProps {
    class?: string,
    hideLogin?: boolean,
    hideLogout?: boolean,
    loginButtonText?: string,
    logoutButtonText?: string,
    showUserMeta?: boolean,
    children?: JSX.Element
}

const logInOutButtonClass = `btn btn-wide flex items-center justify-center mx-auto mt-8 text-3xl mb-8`

const LogInOutButton: Component<LogInOutButtonProps> = (props) => {

    console.log(`LogInOutButton: props:`, props)

    const session = useSession()
    const user = () => session()?.user

    return (
        <>
            <Show when={!user() && !props.hideLogin}>
                <Button.Root
                    class={` ${logInOutButtonClass} btn-info ${props.class} `}
                    onClick={() => signIn("auth0")}
                >
                    {props.loginButtonText || 'log in via Auth0'}
                    {props.children}
                </Button.Root>

                <Button.Root
                    class={` ${logInOutButtonClass} btn-info ${props.class} `}
                    onClick={() => signIn("discord")}
                >
                    {props.loginButtonText || 'log in via Discord'}
                    {props.children}
                </Button.Root>
            </Show>

            <Show when={user() && !props.hideLogout}>
                <Button.Root
                    class={` ${logInOutButtonClass} btn-warning ${props.class} `}
                    onClick={() => signOut()}
                >
                    {props.logoutButtonText || 'log out'}
                    {props.children}
                </Button.Root>
            </Show>

            <Show when={user() && props.showUserMeta}>
                <pre class="text-left">
                    {JSON.stringify(user(), null, 4)}
                </pre>
            </Show>
        </>
    )
}

export default LogInOutButton
