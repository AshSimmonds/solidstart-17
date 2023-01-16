import type { VoidComponent } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"

const BlankPage: VoidComponent = () => {
    return (
        <Layout>
            <Title>Blank</Title>
            <h1>Empty</h1>

            <div class="text-center mx-auto ">

                <h2>Centered stuff</h2>

                <div>
                    nothing to see here
                </div>

            </div>
        </Layout>
    )
}

export default BlankPage
