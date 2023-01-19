import type { VoidComponent } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"

const XStatePage: VoidComponent = () => {
    return (
        <Layout>
            <Title>XState</Title>
            <h1>XState</h1>

            <div class="text-center mx-auto ">

                <h2>Centered stuff</h2>

                <div>
                    nothing to see here
                </div>

            </div>
        </Layout>
    )
}

export default XStatePage
