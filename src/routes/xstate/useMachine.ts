/* eslint-disable solid/reactivity */
import type {
    AnyStateMachine,
    EventFrom,
    InterpreterFrom,
    StateFrom,
    StateValueFrom
} from "xstate";
import {
    interpret
} from "xstate";
import type { Accessor} from "solid-js";
import { createSignal, onCleanup, onMount } from "solid-js";

interface UseMachineApi<M extends AnyStateMachine> {
    can: (event: EventFrom<M> | EventFrom<M>["type"]) => boolean;
    matches: (state: StateValueFrom<M>) => boolean;
    select: <Result>(
        selector: (state: StateFrom<M>) => Result
    ) => Accessor<Result>;
    send: InterpreterFrom<M>["send"];
}

export const useMachine = <M extends AnyStateMachine>(
    machine: M
): UseMachineApi<M> => {
    const service = interpret(machine);
    const unsubscribes: Array<() => void> = [];
    onMount(() => {
        service.start();
    });
    onCleanup(() => {
        service.stop();
        unsubscribes.forEach((unsubscribe) => unsubscribe());
    });
    return {
        can: (event) => {
            const [can, setCan] = createSignal(service.getSnapshot().can(event));
            unsubscribes.push(
                service.subscribe((s) => setCan(s.can(event))).unsubscribe
            );
            return can();
        },
        matches: (state) => {
            const [matches, setMatches] = createSignal(
                service.getSnapshot().matches(state)
            );
            unsubscribes.push(
                service.subscribe((s) => setMatches(s.matches(state))).unsubscribe
            );
            return matches();
        },
        select: (selector) => {
            const [result, setResult] = createSignal(
                selector(service.getSnapshot() as StateFrom<M>)
            );
            unsubscribes.push(
                service.subscribe((state) =>
                    setResult(() => selector(state as StateFrom<M>))
                ).unsubscribe
            );
            return result;
        },
        send: service.send
    };
};
