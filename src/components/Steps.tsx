import { Show } from "solid-js"

export default function Steps(props: any) {

    console.log(`props: ${JSON.stringify(props, null, 4)}`)


    return (
        <ul class={`steps ${props.class || ''} `}>

            <li class={`step ${1 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '10' : undefined} />
            <li class={`step ${2 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '9' : undefined} />
            <li class={`step ${3 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '8' : undefined} />
            <li class={`step ${4 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '7' : undefined} />
            <li class={`step ${5 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '6' : undefined} />
            <li class={`step ${6 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '5' : undefined} />
            <li class={`step ${7 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '4' : undefined} />
            <li class={`step ${8 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '3' : undefined} />
            <li class={`step ${9 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '2' : undefined} />
            <li class={`step ${10 >= props.step ? 'step-primary' : ''} `} data-content={props.reverse ? '1' : undefined} />
            <Show when={props.icon}>
                <li class="step text-4xl -left-2" data-content={props.icon} />
            </Show>
        </ul>
    )
}