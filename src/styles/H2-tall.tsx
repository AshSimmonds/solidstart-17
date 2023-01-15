import type { Component, JSX } from "solid-js"
import styles from "./H2-tall.module.css"

interface H2TallProps {
    children: JSX.Element
}

const H2Tall: Component<H2TallProps> = (props) => {
    return (
        <div class={styles.h2}>
            {props.children}
        </div>
    )
}

export default H2Tall
