import type { Component, JSX, VoidComponent } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import XCOMInfoPanel from "~/components/XCOMInfoPanel"
import XCOMOperationBriefing from "~/components/XCOMOperationBriefing"
import CheckboxShowHide from "~/components/CheckboxShowHide"
import ShowHide from "~/components/ShowHide"

const ShowHidePage: VoidComponent = () => {
    return (
        <Layout>
            <Title>SolidStart toggle show/hide content examples | SolidJS</Title>
            <h1>Toggle show/hide examples</h1>

            <h2>Zag vs Kobalte vs ...?</h2>

            <div class="w-full flex flex-wrap gap-4 justify-evenly">
                <ShowHideCard>
                    <CheckboxShowHide
                        showWhat="Zag"
                    >
                        <XCOMInfoPanel >
                            <h2 class="text-center">Zag Checkbox</h2>

                            <code>{`<Checkbox>`}</code>  from @zag-js/solid.<br />
                            <br />
                            Source: <a href="https://github.com/AshSimmonds/solidstart-17/blob/main/src/components/CheckboxShowHide.tsx" target="_blank" rel="noreferrer">github</a>

                            <br />
                            Library: <a href="https://zagjs.com/components/solid/checkbox" target="_blank" rel="noreferrer">zagjs.com</a>
                        </XCOMInfoPanel>
                    </CheckboxShowHide>
                </ShowHideCard>


                <ShowHideCard>
                    <ShowHide
                        showWhat="Kobalte"
                    >
                        <XCOMInfoPanel >
                            <h2 class="text-center">Kobalte ToggleButton</h2>

                            <code>{`<ToggleButton>`}</code>  from @kobalte/core.<br />
                            <br />
                            Source: <a href="https://github.com/AshSimmonds/solidstart-17/blob/main/src/components/ShowHide.tsx" target="_blank" rel="noreferrer">github</a>

                            <br />
                            Library: <a href="https://kobalte.dev/docs/components/toggle-button" target="_blank" rel="noreferrer">kobalte.dev</a>
                        </XCOMInfoPanel>
                    </ShowHide>
                </ShowHideCard>


                <ShowHideCard>
                    <details
                        class={`btn btn-sm btn-outline btn-warning mt-8`}
                    >
                        <summary>{`Show <details>`}</summary>
                        <XCOMInfoPanel class="mt-4 text-left">
                            <pre>{`
                                <details>
                                    <summary>Stuff to show on toggle element</summary>

                                    <p>
                                        Content that is hidden until clicking the toggle element.
                                    </p>
                                </details>
                            `}</pre>
                        </XCOMInfoPanel>
                    </details>
                </ShowHideCard>


            </div>

            <XCOMOperationBriefing
                title="ZagJS.com"
                subtitle="XState powered UI components"
                icon={<img src="https://pbs.twimg.com/profile_images/1515087274442207242/18GLudmK_400x400.png" class="w-12 mx-2" />}
                class="mt-12"
            >
                <p>TODO: write some stuff about what's good about Zag in this situation</p>

                <a href="https://github.com/AshSimmonds/solidstart-17/issues/26" target="_blank" rel="noreferrer" class="btn btn-sm btn-ghost mt-8"><img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                    class="w-6 float-left mr-2"
                /></a>
            </XCOMOperationBriefing>

            <XCOMOperationBriefing
                title="Kobalte.dev"
                subtitle="Accessible UI toolkit for SolidJS"
                class="mt-12"
            >
                <p>TODO: write some stuff about what's good about Kobalte in this situation</p>

                <a href="https://github.com/AshSimmonds/solidstart-17/issues/26" target="_blank" rel="noreferrer" class="btn btn-sm btn-ghost mt-8"><img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                    class="w-6 float-left mr-2"
                /></a>
            </XCOMOperationBriefing>



        </Layout>
    )
}

export default ShowHidePage


// interface ShowHideCardProps {
//     children: JSX.Element
// }

// const ShowHideCard: Component<ShowHideCardProps> = (props) => {
const ShowHideCard: Component<{ children: JSX.Element }> = (props) => {
    return (
        <div class="">
            {props.children}
        </div>
    )
}

