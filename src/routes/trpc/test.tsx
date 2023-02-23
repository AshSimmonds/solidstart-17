import type { VoidComponent } from "solid-js"
import { createSignal } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import { trpc } from "~/utils/trpc"

const TrpcTestPage: VoidComponent = () => {

    const [trpcQuery01, setTrpcQuery01] = createSignal(trpc.exampleRouter.jsonplaceholder.useQuery(() => ({id: Math.floor(Math.random() * 100)})))

    const [trpcQuery02, setTrpcQuery02] = createSignal(trpc.exampleRouter.jsonplaceholder.useQuery(() => ({id: Math.floor(Math.random() * 100)})))

    const [trpcQuery03, setTrpcQuery03] = createSignal(trpc.exampleRouter.jsonplaceholder.useQuery(() => ({id: Math.floor(Math.random() * 100)})))

    const [trpcQuery04, setTrpcQuery04] = createSignal(trpc.exampleRouter.jsonplaceholder.useQuery(() => ({id: Math.floor(Math.random() * 100)})))



    return (
        <Layout>
            <Title>TrpcTest</Title>
            <h1>TrpcTest</h1>

            Try refreshing this page, or copy paste the url into a private browser window. It will often time out.

            <h2>trpcQuery01</h2>
            <pre>
                {JSON.stringify(trpcQuery01(), null, 4)}
            </pre>

            <h2>trpcQuery02</h2>
            <pre>
                {JSON.stringify(trpcQuery02(), null, 4)}
            </pre>

            <h2>trpcQuery03</h2>
            <pre>
                {JSON.stringify(trpcQuery03(), null, 4)}
            </pre>

            <h2>trpcQuery04</h2>
            <pre>
                {JSON.stringify(trpcQuery04(), null, 4)}
            </pre>



        </Layout>
    )
}

export default TrpcTestPage
