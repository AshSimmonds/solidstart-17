import type { Component, JSX } from "solid-js"
import { A } from "solid-start"

interface CardProps {
    title?: string,
    subtitle?: string,
    img?: string,
    imgBottom?: boolean,
    imgFull?: boolean,
    cardUrl?: string,
    buttonText?: string,
    buttonUrl?: string,
    buttonClass?: string,
    class?: string,
    rounded?: boolean,
    outline?: boolean,
    hoverZoom?: boolean,
    hoverHighlight?: boolean,
    children: JSX.Element
}

const Card: Component<CardProps> = (props) => {

    // TODO: delete hack if <Card /> is ever used, just testing click vs A
    props.buttonText = props.title
    props.buttonUrl = props.cardUrl

    return (
        <div class={` card border transition-all 
            ${props.outline ? " border border-secondary shadow-sm shadow-base-100 " : " bg-base-100 border-base-200 shadow-md "}
            ${props.rounded ? " rounded-lg shadow-lg " : " "}
            ${props.hoverZoom ? " hover:scale-110 hover:shadow-2xl " : " "}
            ${props.hoverHighlight ? " hover:border-secondary hover:bg-base-200 hover:bg-opacity-50 " : " "}
            ${props.cardUrl ? " cursor-pointer " : " "}
            ${props.imgFull ? " image-full before:bg-pink-500 " : " "}
            ${props.class} 
        `}

            onClick={() => {
                if (props.cardUrl) {
                    window.location.href = props.cardUrl
                } else {
                    // console.log({`Clicked ${} without cardUrl`})
                }
            }}

        >

            {props.img && !props.imgBottom && <figure class=" " ><img src={props.img} alt={props.title} /></figure>}
            <div class="card-body p-4">

                {props.title && <h3 class="mt-0 mb-0">{props.title}</h3>}

                {props.subtitle && <div class="text-secondary">{props.subtitle}</div>}

                {props.title || props.subtitle ? <hr class="my-2" /> : ""}

                {props.children}

                {props.buttonText && props.buttonUrl &&
                    <div class="card-actions justify-end">
                        <A href={props.buttonUrl ? props.buttonUrl : ''} class={`btn btn-secondary btn-sm ${props.buttonClass} `}>{props.buttonText}</A>
                    </div>
                }

            </div>
            {props.img && props.imgBottom && <figure><img src={props.img} alt={props.title} /></figure>}
        </div>
    )
}

export default Card



{/* <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}