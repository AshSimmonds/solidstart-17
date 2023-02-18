import type { VoidComponent } from "solid-js"
import { For } from "solid-js"
import { createSignal } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import Card from "~/components/Card"

const BlankPage: VoidComponent = () => {

    const [cardCownt, setCardCount] = createSignal(9)

    const asdfLinks = [
        {
            "cardText": "404",
            "cardLink": "/lost",
            "cardImage": ""
        },
        {
            "cardText": "My Plan",
            "cardLink": "/plan",
            "cardImage": ""
        },
        {
            "cardText": "Videos",
            "cardLink": "/video",
            "cardImage": ""
        },
        {
            "cardText": "Tags",
            "cardLink": "/tag",
            "cardImage": ""
        },
        {
            "cardText": "Empty page",
            "cardLink": "/asdf/blank",
            "cardImage": ""
        },
        {
            "cardText": "Dialog / Modal",
            "cardLink": "/asdf/dialog",
            "cardImage": ""
        },
        {
            "cardText": "Fonts",
            "cardLink": "/asdf/fonts",
            "cardImage": ""
        },
        {
            "cardText": "Nanostores",
            "cardLink": "/asdf/nanostores",
            "cardImage": ""
        },
        {
            "cardText": "Typography",
            "cardLink": "/asdf/typography",
            "cardImage": ""
        },
        {
            "cardText": "Show/Hide toggles",
            "cardLink": "/asdf/showhide",
            "cardImage": ""
        },
        {
            "cardText": "asdf",
            "cardLink": "qwer",
            "cardImage": ""
        },
    ]



    return (
        <Layout>
            <Title>ASDF</Title>
            <h1>Dev resources</h1>



            <h2>General stuff</h2>
            <section>
                <div>
                    Just some links and things to help whilst developing.
                </div>
            </section>





            <section class="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3 2xl:grid-cols-4">

                <For each={asdfLinks}>
                    {({ cardText, cardLink, cardImage }) => (
                        <Card
                            title={cardText}
                            subtitle=""
                            img={cardImage}
                            imgBottom={false}
                            imgFull={false}
                            cardUrl={cardLink}
                            buttonText=""
                            buttonUrl=""
                            buttonClass=""
                            rounded={false}
                            outline={false}
                            hoverZoom={true}
                            hoverHighlight={true}
                            class=""
                        >
                            <div class="">
                                
                            </div>
                        </Card>
                    )}
                </For>

            </section>






        </Layout>
    )
}

export default BlankPage
