import type { ActorRefFrom } from "xstate";
import { createMachine } from "xstate"

export const checkoutMachine = createMachine({
    "id": "Checkout",
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
                "ENTER_VIP_CODE": {}
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
    context: {},
    predictableActionArguments: true,
    preserveActionOrder: true,
})





export type CheckoutActor = ActorRefFrom<typeof checkoutMachine>

