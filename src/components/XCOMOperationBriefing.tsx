import { Show, type Component, type JSX } from "solid-js"

interface XCOMOperationBriefingProps {
    icon?: string | JSX.Element | "none"
    title?: string
    subtitle?: string | JSX.Element
    children: JSX.Element
    summary?: string
    class?: string
}

const XCOMOperationBriefing: Component<XCOMOperationBriefingProps> = (props) => {

    return (

        <section id="xcomblueleft"
            data-augmented-ui="tr-2-clip-y br-clip-y b-clip-x bl-2-clip-x l-clip-y border"
            class={`styleme pb-12 pt-0 pl-0 pr-8 ${props.class} `}>
            <div class="flex">
                <div class="flex-none text-4xl mt-2">
                    {props.icon ?
                        props.icon === "none" ?
                            '' :
                            props.icon :
                        '🌐'}
                </div>
                <div class="flex-1 w-64 ...">
                    <h3 class="mt-2">{props.title}</h3>
                    <h4 class="text-secondary mt-0">{props.subtitle}</h4>
                    <Show when={props.title || props.subtitle}>
                        <hr />
                    </Show>
                    <div class="">
                        {props.children}
                    </div>

                    <Show when={props.summary}>
                        <div class="mt-4 translucent bg-success bg-opacity-20 btn-block text-center opacity-80">
                            {props.summary}
                        </div>
                    </Show>
                </div>
            </div>
        </section>


    )


}



export default XCOMOperationBriefing
