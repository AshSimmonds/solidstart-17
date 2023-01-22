import type { VoidComponent } from "solid-js";
import { Title } from "solid-start"
import { interpret } from "xstate";
import Layout from "~/layouts/Layout"
import { checkoutMachine } from "./checkoutMachine"

const actor = interpret(checkoutMachine)

console.log(`xstate | index.tsx | actor`, actor)



const XStatePage: VoidComponent = () => {


    return (
        <Layout>
            <Title>XState</Title>
            <h1>XState</h1>



            <h2>Basic layout</h2>
            <section>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </section>




        </Layout>
    )
}

export default XStatePage
