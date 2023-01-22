import type { Component, JSX } from "solid-js"

interface BlankProps {
    class?: string,
    children: JSX.Element
}

const FontHacker: Component<BlankProps> = (props) => {
    return (
        <div class={`font-hacker  ${props.class}`}>
            {props.children}
        </div>
    )
}

export default FontHacker
