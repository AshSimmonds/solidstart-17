import type { Component } from "solid-js"

interface StarsProps {
    rating: number
    name: string
    class?: string
}


const Stars: Component<StarsProps> = (props) => {

    // console.log(`component Stars.tsx / props: ${JSON.stringify(props, null, 4)}`)

    return (

        <div class={`rating ${props.class}`} >

            <input type="radio" name={`rating-${props.name}`} class="mask mask-star" disabled
                checked={props.rating >= 1}
            />
            <input type="radio" name={`rating-${props.name}`} class="mask mask-star" disabled
                checked={props.rating >= 3}
            />
            <input type="radio" name={`rating-${props.name}`} class="mask mask-star" disabled
                checked={props.rating >= 5}
            />
            <input type="radio" name={`rating-${props.name}`} class="mask mask-star" disabled
                checked={props.rating >= 8}
            />
            <input type="radio" name={`rating-${props.name}`} class="mask mask-star" disabled
                checked={props.rating >= 10}
            />

        </div>

    )
}


export default Stars
