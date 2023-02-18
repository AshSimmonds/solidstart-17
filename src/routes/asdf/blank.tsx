import type { VoidComponent } from "solid-js"
import { For } from "solid-js"
import { createSignal } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import Card from "~/components/Card"

const BlankPage: VoidComponent = () => {

    const [cardCownt, setCardCount] = createSignal(9)






    return (
        <Layout>
            <Title>Blank</Title>
            <h1>Empty</h1>



            <h2>Basic layout</h2>
            <section>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </section>




            <h2>Centered stuff</h2>
            <section class="mx-auto w-full md:w-4/5 lg:w-2/3 xl:w-1/2 ">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </section>




            <h2>Neat card layout</h2>

            <div class="input-group mx-auto w-56">
                <button class="btn btn-primary" onClick={() => setCardCount(cardCownt() - 1)}>-1</button>
                <input class="input input-ghost input-bordered w-36 mb-8 " type="number" value={cardCownt()} onChange={(e) => setCardCount(parseInt(e.currentTarget.value))} />
                <button class="btn btn-primary" onClick={() => setCardCount(cardCownt() + 1)}>+1</button>
            </div>

            <section class="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3 2xl:grid-cols-4">

                <For each={Array(cardCownt())}>
                    {() => (
                        <Card
                            title="Card title"
                            subtitle="Card subtitle"
                            img="https://placeimg.com/400/250/arch"
                            imgBottom={false}
                            imgFull={false}
                            cardUrl=""
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </Card>
                    )}
                </For>

            </section>






        </Layout>
    )
}

export default BlankPage
