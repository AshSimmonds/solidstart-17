import { Alert as AlertKobalte } from "@kobalte/core"
import type { Component, JSX } from "solid-js"

interface AlertProps {
    class?: string,
    severity?: "success" | "info" | "warning" | "error",
    showSeverityIcon?: boolean,
    children: JSX.Element
}

const severityIcon = (severity = "") => {
    switch (severity) {
        case "success":
            return '✔ '
        case "info":
            return '🛈 '
        case "warning":
            return '⚠ '
        case "error":
            return '💀 '
        default:
            return '🖖🏻 '
    }
}

const Alert: Component<AlertProps> = (props) => {
    return (
        <AlertKobalte.Root
            class={`alert alert-${props.severity ? props.severity : 'info'} ${props.class} `}>
            {props.showSeverityIcon ? severityIcon(props.severity) : ''}
            {props.children}
        </AlertKobalte.Root>
    )
}

export default Alert
