import clsx from 'clsx'
import type { JSX } from 'solid-js'
import { splitProps } from 'solid-js'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'

type TextInputProps = {
    ref: (element: HTMLInputElement) => void
    type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date'
    name: string
    value: string | number | undefined
    onInput: JSX.EventHandler<HTMLInputElement, InputEvent>
    onChange: JSX.EventHandler<HTMLInputElement, Event>
    onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>
    placeholder?: string
    required?: boolean
    class?: string
    label?: string
    error?: string
    padding?: 'none'
}

/**
 * Text input field that users can type into. Various decorations can be
 * displayed in or around the field to communicate the entry requirements.
 */
export function TextInput(props: TextInputProps) {
    const [, inputProps] = splitProps(props, [
        'class',
        'value',
        'label',
        'error',
        'padding',
    ])
    return (
        <div class={clsx(!props.padding && 'px-8 lg:px-10 form-control', props.class)}>
            <InputLabel
                name={props.name}
                label={props.label}
                required={props.required}
            >
                <input
                    {...inputProps}
                    class={clsx(
                        'input input-bordered h-14 w-full rounded-2xl border-2 bg-white px-5 outline-none placeholder:text-slate-500 dark:bg-gray-900 md:h-16 md:text-lg lg:h-[70px] lg:px-6 lg:text-xl',
                        props.error
                            ? 'border-red-600/50 dark:border-red-400/50'
                            : 'border-slate-200 hover:border-slate-300 focus:border-sky-600/50 dark:border-slate-800 dark:hover:border-slate-700 dark:focus:border-sky-400/50'
                    )}
                    id={props.name}
                    value={props.value || ''}
                    aria-invalid={!!props.error}
                    aria-errormessage={`${props.name}-error`}
                />
            </InputLabel>
            <InputError name={props.name} error={props.error} />
        </div>
    )
}
