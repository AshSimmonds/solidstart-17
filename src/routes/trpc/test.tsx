import type { VoidComponent } from "solid-js"
import { A, Title } from "solid-start"
import Layout from "~/layouts/Layout"

const TrpcTestPage: VoidComponent = () => {

    return (
        <Layout>
            <Title>tRPC stress test</Title>
            <h1>tRPC stress test</h1>

            <section class="mx-auto w-full md:w-4/5 lg:w-2/3 xl:w-1/2 flex justify-evenly gap-4">
                <div>
                    The tRPC test page just gets four very light and simple chunks of data.<br />
                    <br />
                    When you navigate there by <code>A href</code> link <A href="/trpc/stress" >like this</A> (capital A) it works fine.<br />
                    <br />
                    But try <a href="/trpc/stress" target="_blank">open in new page</a> or with a normal link and it will quite often time out.<br />
                    <br />
                    <A href="/trpc/stress" class="btn btn-primary">NAVIGATION LINK</A><br />
                    <br />
                    <a href="/trpc/stress" class="btn btn-primary">NORMAL LINK</a>
                    <br />
                    <br />
                    <hr />
                    PR welcome to fix this, here: <br />
                    <br />
                    <a href="https://github.com/AshSimmonds/solidstart-17/issues/48" target="_blank" class="btn btn-warning">GitHub issue #48</a>
                </div>
            </section>
        </Layout>
    )
}

export default TrpcTestPage
