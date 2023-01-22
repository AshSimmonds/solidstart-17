import type { VoidComponent } from "solid-js";
import { Title } from "solid-start"
import { interpret } from "xstate"
import Layout from "~/layouts/Layout"
import { checkoutMachine } from "~/deus-ex/checkoutMachine"
import { useMachine } from "./useMachine"
import { createSignal } from "solid-js"
import XCOMInfoPanel from "~/components/XCOMInfoPanel"

const actorHoisted = interpret(checkoutMachine).start()

console.log(`xstate | index.tsx | actorHoisted`, actorHoisted)



const XStatePage: VoidComponent = () => {

    const actorPage = useMachine(checkoutMachine)

    const [theState, setTheState] = createSignal(actorHoisted.initialState)

    // const stateValue = () => state().value.toString()



    actorHoisted.onTransition((newState) => {
        console.log(`xstate | index.tsx | actorHoisted.onTransition | state`, newState)
        setTheState(newState)
    })




    return (
        <Layout>
            <Title>XState</Title>
            <h1>XState</h1>

            <h2><code>theState().value:</code>{theState().value.toString()}</h2>


            {theState().value === "cart" && (
                <XCOMInfoPanel>
                    <h3>Cart</h3>

                    <button class="btn btn-primary" onClick={() => actorHoisted.send("CHECKOUT")}>NEXT</button>
                </XCOMInfoPanel>
            )}

            {theState().value === "shipping" && (
                <XCOMInfoPanel>
                    <h3>Shipping</h3>

                    <input class="input input-bordered" type="text" placeholder="VIP code"
                        value={theState().context.vipCode || ""}
                        data-xstate-event="ENTER_VIP_CODE"
                        onChange={(e) => actorHoisted.send({ 
                            type: "ENTER_VIP_CODE", 
                            value: e.target.value 
                        })}
                    />

                    <h4>asdf{theState().context.vipCode}qwer</h4>

                </XCOMInfoPanel>
            )}

            {theState().value === "contact" && (
                <XCOMInfoPanel>
                    <h3>Contact</h3>
                </XCOMInfoPanel>
            )}

            {theState().value === "payment" && (
                <XCOMInfoPanel>
                    <h3>Payment</h3>
                </XCOMInfoPanel>
            )}

            {theState().value === "confirmation" && (
                <XCOMInfoPanel>
                    <h3>Confirmation</h3>
                </XCOMInfoPanel>
            )}



            <h3><code>actorHoisted = interpret(checkoutMachine).start()</code></h3>
            <pre>
                {JSON.stringify(actorHoisted, null, 4)}
            </pre>



            <h3><code>actorPage = useMachine(checkoutMachine)</code></h3>
            <pre>
                {JSON.stringify(actorPage, null, 4)}
            </pre>



            <h3><code>theState() = createSignal(actorHoisted.initialState)</code></h3>
            <pre>
                {JSON.stringify(theState(), null, 4)}
            </pre>





        </Layout>
    )
}

export default XStatePage
