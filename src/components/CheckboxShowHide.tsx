import type { Component, JSX } from "solid-js"
import { Show, createMemo, createUniqueId } from "solid-js"
import * as checkbox from "@zag-js/checkbox"
import { normalizeProps, useMachine } from "@zag-js/solid"

interface CheckboxShowHideProps {
    showWhat?: string,
    class?: string,
    children: JSX.Element
}

const CheckboxShowHide: Component<CheckboxShowHideProps> = (props) => {
    const [state, send] = useMachine(checkbox.machine({ id: createUniqueId() }))

    const api = createMemo(() => checkbox.connect(state, send, normalizeProps))

    return (
        <>
            <label {...api().rootProps}
                class={`btn btn-sm btn-outline btn-warning mt-8 ${props.class} `}>

                <span {...api().labelProps}>
                    {api().isChecked ? "Hide" : "Show"} {props.showWhat}
                </span>
                <input {...api().inputProps} />
                <div {...api().controlProps} />
            </label>
            <Show when={api().isChecked}>
                {props.children}
            </Show>
        </>
    )
}

export default CheckboxShowHide
