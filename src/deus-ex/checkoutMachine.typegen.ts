
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: "setVipCode";
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "setVipCode": "ENTER_VIP_CODE";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "cart" | "confirmation" | "contact" | "payment" | "shipping";
        tags: never;
      }
  