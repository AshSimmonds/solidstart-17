import { ActorRefFrom, interpret } from "xstate";
import { actions } from "xstate";
import { assign } from "xstate";
import { createMachine } from "xstate"

export const checkoutMachine = createMachine({
    "id": "Checkout",
    context: {
        vipCode: '',
    },
    "initial": "cart",
    "states": {
        "cart": {
            "on": {
                "CHECKOUT": {
                    "target": "shipping"
                },
                "PAYPAL": {
                    "target": "payment"
                },
                "ENTER_VIP_CODE": {
                    "actions": "setVipCode"
                    // "actions": [
                    //     "setVipCode"
                    // ]
                }
            }
        },
        "shipping": {
            "on": {
                "NEXT": {
                    "target": "contact"
                },
                "SELECT_SHIPPING_ADDRESS": {},
                "SELECT_SHIPPING_METHOD": {}
            }
        },
        "contact": {
            "on": {
                "NEXT": {
                    "target": "payment"
                },
                "ENTER_EMAIL": {},
                "ENTER_MOBILE": {}
            }
        },
        "payment": {
            "on": {
                "ORDER": {
                    "target": "confirmation"
                },
                "SELECT_PAYMENT_METHOD": {},
                "AGREE": {}
            }
        },
        "confirmation": {
            "type": "final"
        }
    },
    // actions: {
        // setVipCode: (context, event) => {
            // console.log(`counterMachine.ts setVipCode context: ${JSON.stringify(context)} `);
            // console.log(`counterMachine.ts setVipCode event: ${JSON.stringify(event)} `);
            // console.log(`counterMachine.ts incrementCounter event: ${JSON.stringify(event)} `);

            // console.log(`counterMachine.ts incrementCounter context: ${JSON.stringify(context)} `);

            // context.count++;
            // context.incrementCount++;
        // },
    // },

    schema: {
        // eslint-disable-next-line @typescript-eslint/ban-types
        context: {} as {
            vipCode: string;

        },
        events: {} as { "type": "CHECKOUT" } | { "type": "NEXT" } | { "type": "ORDER" } | { "type": "PAYPAL" } | { "type": "ENTER_VIP_CODE" } | { "type": "SELECT_SHIPPING_ADDRESS" } | { "type": "SELECT_SHIPPING_METHOD" } | { "type": "ENTER_EMAIL" } | { "type": "ENTER_MOBILE" } | { "type": "SELECT_PAYMENT_METHOD" } | { "type": "AGREE" }
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    tsTypes: {} as import("./checkoutMachine.typegen").Typegen0,



})



// export default checkoutMachine

export const checkoutMachineActor = interpret(checkoutMachine).start()


