import { type Component, type JSX } from "solid-js"

interface XCOMInfoPanelProps {
    children: JSX.Element
    class?: string
}

const XCOMInfoPanel: Component<XCOMInfoPanelProps> = (props) => {

    return (

        <section id="xcomgreenright" data-augmented-ui="" class={`pt-2 pb-4 px-12 ${props.class} `}>
            {props.children}
        </section>

    )


}

export default XCOMInfoPanel
