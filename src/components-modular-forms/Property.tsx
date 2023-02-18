import clsx from 'clsx';
import { For } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { A } from 'solid-start';

type SingleTypeOrValue =
  | 'string'
  | 'number'
  | 'boolean'
  | 'null'
  | 'undefined'
  | 'void'
  | 'object'
  | 'array'
  | 'tuple'
  | 'function'
  | {
      type: 'string';
      value: string;
    }
  | {
      type: 'number';
      value: number;
    }
  | {
      type: 'boolean';
      value: boolean;
    }
  | {
      type: 'object';
      entries: {
        key: string | { name: string; type: TypeOrValue };
        value: TypeOrValue;
      }[];
    }
  | {
      type: 'array';
      item: TypeOrValue;
    }
  | {
      type: 'tuple';
      items: TypeOrValue[];
    }
  | {
      type: 'function';
      params: { name: string; type: TypeOrValue }[];
      return: TypeOrValue;
    }
  | {
      type: 'custom';
      name: string;
      generics?: TypeOrValue[];
      href?: string;
    };

type TypeOrValue = SingleTypeOrValue | SingleTypeOrValue[];

type PropertyProps = {
  type: TypeOrValue;
  defaultValue?: TypeOrValue;
  padding?: 'none';
};

/**
 * Visually represents the type and default value of a property with syntax
 * highlighting using JSON schema as props.
 */
export function Property(props: PropertyProps) {
  return (
    <code
      class={clsx(
        'bg-transparent p-0 text-slate-600 dark:bg-transparent dark:text-slate-400',
        !props.padding && 'px-2'
      )}
    >
      <For each={Array.isArray(props.type) ? props.type : [props.type]}>
        {(type, index) => (
          <>
            {index() > 0 && ' | '}
            {type &&
              (typeof type === 'string' ? (
                <span
                  class={clsx({
                    'text-yellow-600 dark:text-amber-200': type === 'string',
                    'text-purple-600 dark:text-purple-400': type === 'number',
                    'text-teal-600 dark:text-teal-400':
                      type === 'boolean' ||
                      type === 'null' ||
                      type === 'undefined' ||
                      type === 'void',
                    'capitalize text-sky-600 dark:text-sky-400':
                      type === 'object' ||
                      type === 'array' ||
                      type === 'tuple' ||
                      type === 'function',
                  })}
                >
                  {type}
                </span>
              ) : type.type === 'string' ? (
                <span class="text-yellow-600 dark:text-amber-200">
                  '{type.value}'
                </span>
              ) : type.type === 'number' ? (
                <span class="text-purple-600 dark:text-purple-400">
                  {type.value}
                </span>
              ) : type.type === 'boolean' ? (
                <span
                  class={clsx(
                    type.value
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-red-600 dark:text-red-400'
                  )}
                >
                  {type.value.toString()}
                </span>
              ) : type.type === 'object' ? (
                <span class="text-slate-600 dark:text-slate-400">
                  {'{'}
                  <For each={type.entries}>
                    {(entrie, index) => (
                      <>
                        {index() === 0 ? ' ' : ', '}
                        <>
                          {typeof entrie.key === 'string' ? (
                            entrie.key
                          ) : (
                            <>
                              [{entrie.key.name}:{' '}
                              <Property type={entrie.key.type} padding="none" />
                              ]
                            </>
                          )}
                        </>
                        : <Property type={entrie.value} padding="none" />
                        {index() === type.entries.length - 1 && ' '}
                      </>
                    )}
                  </For>
                  {'}'}
                </span>
              ) : type.type === 'array' ? (
                <span>
                  {Array.isArray(type.item) && type.item.length > 1 && '('}
                  <Property type={type.item} padding="none" />
                  {Array.isArray(type.item) && type.item.length > 1 && ')'}
                  <span class="text-slate-600 dark:text-slate-400">[]</span>
                </span>
              ) : type.type === 'tuple' ? (
                <span class="text-slate-600 dark:text-slate-400">
                  [
                  <For each={type.items}>
                    {(item, index) => (
                      <>
                        {index() > 0 && ', '}
                        <Property type={item} padding="none" />
                      </>
                    )}
                  </For>
                  ]
                </span>
              ) : type.type === 'function' ? (
                <span class="text-slate-600 dark:text-slate-400">
                  {Array.isArray(type.return) && '('}(
                  <For each={type.params}>
                    {(param, index) => (
                      <>
                        {index() > 0 && ', '}
                        {param.name}:{' '}
                        <Property type={param.type} padding="none" />
                      </>
                    )}
                  </For>
                  ) {'=>'} <Property type={type.return} padding="none" />
                  {Array.isArray(type.return) && ')'}
                </span>
              ) : (
                <Dynamic component={type.href ? A : 'span'} href={type.href}>
                  <span class="text-sky-600 dark:text-sky-400">
                    {type.name}
                  </span>
                  {type.generics && (
                    <>
                      {'<'}
                      <For each={type.generics}>
                        {(generic, index) => (
                          <>
                            {index() > 0 && ', '}
                            <Property type={generic} padding="none" />
                          </>
                        )}
                      </For>
                      {'>'}
                    </>
                  )}
                </Dynamic>
              ))}
          </>
        )}
      </For>
      {props.defaultValue && (
        <>
          {' = '}
          <Property type={props.defaultValue} padding="none" />
        </>
      )}
    </code>
  );
}
