import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import type { Component, JSX } from "solid-js"
import { atom } from 'nanostores'
import XCOMOperationBriefing from "~/components/XCOMOperationBriefing";
import XCOMInfoPanel from "~/components/XCOMInfoPanel";



const NanostoresPage: VoidComponent = () => {


    return (
        <Layout>
            <Title>Nanostores</Title>
            <h1>Nanostores</h1>

            <XCOMOperationBriefing
                title="Reference"
                subtitle="Nanostores is a tiny library for creating stores in Solid.js"
                summary="Dunno yet"
                class=" m-12"
            >
                This page is just testing what it does, using minimal example demos.<br />
                <br />
                Please mess around and submit PRs to improve this resource.<br />

                <ul class="my-4">
                    <li>
                        Library: <a href="https://github.com/nanostores/nanostores#solid" target="_blank" rel="noreferrer">
                            https://github.com/nanostores/nanostores#solid
                        </a>
                    </li>
                    <li>
                        Source: <a href="https://github.com/AshSimmonds/solidstart-17/tree/main/src/routes/nanostores" target="_blank" rel="noreferrer">
                            /src/routes/nanostores
                        </a>
                    </li>
                </ul>
            </XCOMOperationBriefing>




            <XCOMInfoPanel>
                <h2 >Basic counter</h2>

                <NanostoreBasic />

            </XCOMInfoPanel>




        </Layout>
    )
}

export default NanostoresPage






interface NanostoreBasicProps {
    class?: string,
    children?: JSX.Element
}

const NanostoreBasic: Component<NanostoreBasicProps> = (props) => {

    const atomCounter = atom(0)

    const [counter, setCounter] = createSignal(atomCounter.get())

    atomCounter.subscribe((value) => {
        console.log(`\nnanostores index.tsx atomCounter.subscribe value:\n`, value)
        setCounter(value)
    })


    return (
        <div class={` ${props.class} `}>
            {props.children}

            <div>
                atomCounter.get(): <code>{counter()}</code>
            </div>

            <div>
                <button
                    class="btn btn-primary"
                    onClick={() =>
                        atomCounter.set(atomCounter.get() - 1)
                    }>
                    atomCounter.set(atomCounter.get() - 1)
                </button>

                <button
                    class="btn btn-primary"
                    onClick={() =>
                        atomCounter.set(0)
                    }>
                    atomCounter.set(0)
                </button>

                <button
                    class="btn btn-primary"
                    onClick={() =>
                        atomCounter.set(atomCounter.get() + 1)
                    }>
                    atomCounter.set(atomCounter.get() + 1)
                </button>
            </div>
        </div>
    )
}
