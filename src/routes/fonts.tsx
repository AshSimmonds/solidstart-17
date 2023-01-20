import type { VoidComponent } from "solid-js"
import { A, Title } from "solid-start"
import Layout from "~/layouts/Layout"
import Alert from "~/components/Alert"

const FontPage: VoidComponent = () => {
    return (
        <Layout>
            <Title>Fonts</Title>
            <h1>Fonts</h1>

            <div class="text-center mx-auto ">

                <h2>Centered stuff</h2>

                <div>
                    nothing to see here
                </div>

            </div>

            <Alert severity="warning" class="mt-24" showSeverityIcon={true} >TODO: put this into <A href="/typography">Typography</A></Alert>
        </Layout>
    )
}

export default FontPage
