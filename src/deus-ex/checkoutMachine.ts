import type { ActorRefFrom} from "xstate";
import { assign } from "xstate";
import { createMachine } from "xstate"

export const checkoutMachine = createMachine({
    "id": "Checkout",
    context: {
        vipCode: null,
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
                    actions: assign({
                        vipCode: (context, event) => event.value
                    })
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
    }
    ,
    schema: {
        context: {} as {

        },
        events: {} as { "type": "CHECKOUT" } | { "type": "NEXT" } | { "type": "ORDER" } | { "type": "PAYPAL" } | { "type": "ENTER_VIP_CODE" } | { "type": "SELECT_SHIPPING_ADDRESS" } | { "type": "SELECT_SHIPPING_METHOD" } | { "type": "ENTER_EMAIL" } | { "type": "ENTER_MOBILE" } | { "type": "SELECT_PAYMENT_METHOD" } | { "type": "AGREE" }
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    tsTypes: {} as import("./checkoutMachine.typegen").Typegen0,
})





export type CheckoutActor = ActorRefFrom<typeof checkoutMachine>

