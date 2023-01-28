import { For } from "solid-js";
import { createSignal } from "solid-js"
import Layout from "~/layouts/Layout"
import Card from "~/components/Card"
import { Suspense, type VoidComponent } from "solid-js";
import { A, Head, Title, Meta, Link } from "solid-start";
import { trpc } from "../utils/trpc";
import { signOut, signIn } from "@auth/solid-start/client";
import { createServerData$ } from "solid-start/server";
import { getSession } from "@auth/solid-start";
import { authOpts } from "./api/auth/[...solidauth]";


const HomePage: VoidComponent = () => {
    const hello = trpc.exampleRouter.hello.useQuery(() => ({ name: "from tRPC" }));

    const [cardCownt, setCardCount] = createSignal(9)



    return (
        <Layout>
            <Title>SolidStart SSR</Title>
            <h1>SolidStart SSR</h1>

            <h2>Centered stuff</h2>
            <section class="mx-auto w-full md:w-4/5 lg:w-2/3 xl:w-1/2 flex justify-evenly gap-4">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </section>




            <div class="flex flex-col items-center gap-2">
                <p class="text-2xl text-white">
                    {hello.data ?? "Loading tRPC query"}
                </p>
                <Suspense>
                    <AuthShowcase />
                </Suspense>
            </div>





        </Layout>
    )
}

export default HomePage









const AuthShowcase: VoidComponent = () => {
    const sessionData = createSession();

    return (
        <div class="flex flex-col items-center justify-center gap-4">
            <p class="text-center text-2xl text-white">
                {sessionData() && <span>Logged in as {sessionData()?.user?.display_name}</span>}
            </p>
            <button
                class="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={
                    sessionData() ? () => void signOut() : () => void signIn("discord")
                }
            >
                {sessionData() ? "Sign out" : "Sign in"}
            </button>

            <button
                class="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={
                    !sessionData() ? () => void signOut() : () => void signIn("discord")
                }
            >
                {!sessionData() ? "Sign out" : "Sign in"}
            </button>

            <h3>sessionData()</h3>
            <pre>
                {JSON.stringify(sessionData(), null, 4)}
            </pre>

        </div>
    );
};

const createSession = () => {
    return createServerData$(async (_, event) => {
        return await getSession(event.request, authOpts);
    });
};
