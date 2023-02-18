import clsx from 'clsx'
import type { JSXElement } from 'solid-js'
import { Show } from 'solid-js'

type InputLabelProps = {
    name: string
    label?: string
    required?: boolean
    margin?: 'none'
    children?: JSXElement
}

/**
 * Input label for a form field.
 */
export function InputLabel(props: InputLabelProps) {
    return (
        <>
            <Show when={props.label}>
                <label
                    class={clsx(
                        'font-medium md:text-lg lg:text-xl',
                        !props.margin && 'mb-4 lg:mb-5 input-group'
                    )}
                    for={props.name}
                >
                    <span class="">
                        {props.label}{' '}
                        {props.required && (
                            <span class="ml-1 text-red-600 dark:text-red-400">*</span>
                        )}
                    </span>
                    {props.children}
                </label>
            </Show>
            <Show when={!props.label}>
                {props.children}
            </Show>
        </>
    )
}
