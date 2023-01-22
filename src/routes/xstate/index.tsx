import type { VoidComponent } from "solid-js";
import { Title } from "solid-start"
import { interpret } from "xstate"
import Layout from "~/layouts/Layout"
import { checkoutMachine } from "./checkoutMachine"
import { useMachine } from "./useMachine"
import { createSignal } from "solid-js"

const actorHoisted = interpret(checkoutMachine).start()

console.log(`xstate | index.tsx | actor`, actorHoisted)



const XStatePage: VoidComponent = () => {

    const actorPage = useMachine(checkoutMachine)

    const [checkoutMachineState, setCheckoutMachineState] = createSignal(actorHoisted.initialState)

    const stateValue = () => checkoutMachineState().value.toString()





    return (
        <Layout>
            <Title>XState</Title>
            <h1>XState</h1>

            <h2><code>stateValue():</code>{stateValue()}</h2>






            <h3><code>actorHoisted = interpret(checkoutMachine).start()</code></h3>
            <pre>
                {JSON.stringify(actorHoisted, null, 4)}
            </pre>



            <h3><code>actorPage = useMachine(checkoutMachine)</code></h3>
            <pre>
                {JSON.stringify(actorPage, null, 4)}
            </pre>



            <h3><code>checkoutMachineState() = createSignal(actorHoisted.initialState)</code></h3>
            <pre>
                {JSON.stringify(checkoutMachineState(), null, 4)}
            </pre>





        </Layout>
    )
}

export default XStatePage
