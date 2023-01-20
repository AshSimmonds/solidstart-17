import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"



import { atom } from 'nanostores'





const NanostoresPage: VoidComponent = () => {

    const atomCounter = atom(0)

    const [counter, setCounter] = createSignal(atomCounter.get())

    atomCounter.subscribe((value) => {
        console.log(`\nnanostores index.tsx atomCounter.subscribe value:\n`, value)
        setCounter(value)
    })


    return (
        <Layout>
            <Title>Nanostores</Title>
            <h1>Nanostores</h1>


            <div>
                atomCounter.get(): <code>{counter()}</code>
            </div>

            <div>
                <button
                    class="btn btn-primary"
                    onClick={() =>
                        atomCounter.set(atomCounter.get() + 1)
                    }>
                    atomCounter.set(atomCounter.get() + 1)
                </button>
            </div>


        </Layout>
    )
}

export default NanostoresPage
