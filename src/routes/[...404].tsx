import { A, Title } from "solid-start"
import Layout from "~/layouts/Layout"

export default function NotFound() {
    return (
        <Layout>
            <div class="text-center mx-auto">
                <Title>Lost in space</Title>
                <h1 class="mt-12">
                    <A href="/" class="btn btn-outline btn-warning text-4xl" >404 | Not Found</A>
                </h1>
            </div>
        </Layout>
    )
}
