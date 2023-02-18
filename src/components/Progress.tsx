import { Show } from "solid-js"

import type { Component } from "solid-js"

interface ProgressProps {
    rating: number,
    max: number,
    icon?: string,
    title?: string,
    class?: string
}


const Progress: Component<ProgressProps> = (props) => {

    // console.log(`components Progress.tsx | props: ${JSON.stringify(props, null, 4)}`)

    return (
        <>
            <div class="alert h-8 shadow-lg bg-transparent">

                <Show when={props.title && !props.icon}>
                    <span>{props.title}</span>
                </Show>

                <Show when={props.icon}>
                    <span class="text-4xl">{props.icon}</span>
                </Show>

                <progress value={props.rating} max={props.max}

                    class={`progress w-4/5 h-4
                    ${props.rating > 8 ? 'progress-success' : ''} 
                    ${props.rating > 6 && props.rating < 9 ? 'progress-info' : ''} 
                    ${props.rating > 5 && props.rating < 7 ? 'progress-accent' : ''} 
                    ${props.rating == 5 ? 'progress-primary' : ''} 
                    ${props.rating > 2 && props.rating < 5 ? 'progress-warning' : ''} 
                    ${props.rating < 3 ? 'progress-error' : ''} 
                    ${props.class ? props.class : ''}
                `}

                />

            </div>

        </>
    )
}

export default Progress
