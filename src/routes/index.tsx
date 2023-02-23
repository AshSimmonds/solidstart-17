import Layout from "~/layouts/Layout"
import { Suspense, type VoidComponent } from "solid-js";
import { A, Title } from "solid-start";
import { trpc } from "../utils/trpc";
import { signOut, signIn } from "@auth/solid-start/client";
import { createServerData$ } from "solid-start/server";
import { getSession } from "@auth/solid-start";
import { authOpts } from "./api/auth/[...solidauth]";


const HomePage: VoidComponent = () => {
    const hello = trpc.exampleRouter.hello.useQuery(() => ({ name: "from tRPC" }));


    return (
        <Layout>
            <Title>SolidStart SSR</Title>
            <h1>SolidStart SSR</h1>

            <h2>tRPC stress test</h2>
            <section class="mx-auto w-full md:w-4/5 lg:w-2/3 xl:w-1/2 flex justify-evenly gap-4">
                <div>
                    The tRPC test page just gets four very light and simple chunks of data.<br />
                    <br />
                    When you navigate there by <code>A href</code> link <A href="/trpc/test" >like this</A> (capital A) it works fine.<br />
                    <br />
                    But try <a href="/trpc/test" target="_blank">open in new page</a> or with a normal link and it will quite often time out.<br />
                    <br />
                    <A href="/trpc/test" class="btn btn-primary">NAVIGATION LINK</A><br />
                    <br />
                    <a href="/trpc/test" class="btn btn-primary">NORMAL LINK</a>
                </div>
            </section>




            {/* <div class="flex flex-col items-center gap-2">
                <p class="text-2xl text-white">
                    {hello.data ?? "Loading tRPC query"}
                </p>
                <Suspense>
                    <AuthShowcase />
                </Suspense>
            </div> */}





        </Layout>
    )
}

export default HomePage








const useSession = () => {
    return createServerData$(async (_, event) => {
        return await getSession(event.request, authOpts);
    });
};

const AuthShowcase: VoidComponent = () => {
    const sessionData = useSession();

    return (
        <div class="flex flex-col items-center justify-center gap-4">
            <p class="text-center text-2xl text-white">
                {sessionData() && <span>Logged in as {sessionData()?.user?.display_name}</span>}
            </p>
            <button
                class="btn"
                onClick={() => void signIn("discord")}
            >
                "Sign in"
            </button>

            <button
                class=""
                onClick={
                    () => void signOut()
                }
            >
                "Sign out"
            </button>

            <h3>user metadata</h3>
            <pre class="">
                {JSON.stringify(sessionData()?.user, null, 4)}
            </pre>

        </div>
    );
};

