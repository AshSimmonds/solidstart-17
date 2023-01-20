import type { VoidComponent } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"



import { atom } from 'nanostores'

export const atomCounter = atom(0)




const NanostoresPage: VoidComponent = () => {

    atomCounter.subscribe((value) => {
        console.log(`\nnanostores index.tsx atomCounter.subscribe value:\n`, value)
    })


    return (
        <Layout>
            <Title>Nanostores</Title>
            <h1>Nanostores</h1>


            <div>
                atomCounter.get(): <code>{atomCounter.get()}</code>
            </div>



        </Layout>
    )
}

export default NanostoresPage
