import type { Component, JSX } from "solid-js"

interface BlankProps {
    class?: string,
    children: JSX.Element
}

const Blank: Component<BlankProps> = (props) => {
    return (
        <div class={` ${props.class} `}>
            {props.children}
        </div>
    )
}

export default Blank
