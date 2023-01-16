import { ToggleButton } from "@kobalte/core"
import type { Component, JSX } from "solid-js";
import { createSignal } from "solid-js"
import { Show } from "solid-js"

interface ShowHideProps {
    showWhat?: string,
    class?: string,    
    children: JSX.Element
}

const ShowHide: Component<ShowHideProps> = (props) => {
    const [isPressed, setPressed] = createSignal(false)

    return (
        <>
            <ToggleButton.Root
                isPressed={isPressed()}
                onPressedChange={setPressed}
                class={`btn btn-sm btn-outline btn-warning mt-8 ${props.class} `}>
                {isPressed() ? "Hide" : "Show"} {props.showWhat}
            </ToggleButton.Root>
            <Show when={isPressed()}>
                {props.children}
            </Show>
        </>
    )
}

export default ShowHide
