import type { VoidComponent } from "solid-js"
import { createSignal } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import Modal from "solid-dialog"
import XCOMOperationBriefing from "~/components/XCOMOperationBriefing"
import XCOMInfoPanel from "~/components/XCOMInfoPanel"

const DialogPage: VoidComponent = () => {
    const [modalBasicIsOpen, setModalBasicIsOpen] = createSignal(false)
    const closeModalBasic = () => setModalBasicIsOpen(false)

    const [modalledWithChildrenIsOpen, setModalledWithChildrenIsOpen] = createSignal(false)
    const closeModalledWithChildren = () => setModalledWithChildrenIsOpen(false)

    const [modalStackIsOpen, setModalStackIsOpen] = createSignal(false)
    const closeModalStack = () => setModalStackIsOpen(false)

    const [modalAboutIsOpen, setModalAboutIsOpen] = createSignal(false)
    const closeModalAbout = () => setModalAboutIsOpen(false)

    return (
        <Layout>
            <Title>Dialog/modal examples and testing</Title>
            <h1>Dialog/modal examples and testing</h1>

            <div class="w-full flex flex-wrap gap-4 justify-evenly">

                <button
                    type='button'
                    onClick={() => setModalBasicIsOpen(true)}
                    class='btn btn-primary text-2xl'
                >
                    basic modal
                </button>
                <Modal
                    isShown={modalBasicIsOpen()}
                    closeModal={closeModalBasic}
                >
                    May the blur be with you
                </Modal>


                <button
                    type='button'
                    onClick={() => setModalledWithChildrenIsOpen(true)}
                    class='btn btn-secondary text-2xl'
                >
                    modalled with children
                </button>
                <Modal
                    isShown={modalledWithChildrenIsOpen()}
                    closeModal={closeModalledWithChildren}
                    dismissText='ACCEPT'
                    // disableDefaultDesktopStyles={true}
                    // disableDefaultMobileStyles={true}
                    modalStyles={{
                        background: "transparent",
                        "width": "90%",
                        "max-width": "666px",
                        "align-content": "left",
                        "color": "white",
                    }}
                >
                    <XCOMOperationBriefing
                        title="Operation: BLURRY MODAL"
                        subtitle="Customizable and accessible modals for solid-js"
                        summary="NOT SURE IF TAILWIND WORKS HERE"
                        class="text-left"
                    >
                        <img src="https://picsum.photos/180/180" alt="random image" class="float-right ml-4" />
                        <p>Bacon ipsum dolor amet tongue hamburger short ribs venison prosciutto swine andouille bresaola kielbasa chuck. Tri-tip pork chop shank ball tip strip steak picanha, chicken cupim bacon sirloin ham fatback chislic.</p>
                        <p>&nbsp</p>
                        <p>Fatback swine frankfurter bresaola short ribs spare ribs, shankle sausage picanha cow sirloin leberkas. Meatloaf hamburger leberkas, meatball ground round sirloin doner brisket shankle porchetta beef ham hock shoulder fatback.</p>
                    </XCOMOperationBriefing>
                </Modal>



                <button
                    type='button'
                    onClick={() => setModalStackIsOpen(true)}
                    class='btn btn-error btn-outline text-2xl'
                >
                    FOOL STACK
                </button>

                <Modal
                    isShown={modalStackIsOpen()}
                    closeModal={closeModalStack}
                    modalStyles={{
                        background: "transparent",
                        "width": "100%",
                        "color": "white",
                    }}
                    dismissText="SYS64378"
                >
                    <h1>FULL STACK DEV JOURNEY: <code>COMPLETE</code></h1>
                </Modal>

                <Modal
                    isShown={modalStackIsOpen()}
                    closeModal={closeModalStack}
                    modalStyles={{
                        background: "transparent",
                        "min-width": "100%",
                        "color": "slategray",
                    }}
                    dismissText={`and so do i`}
                >
                    you know the rules
                    <iframe width="200" height="800" src="https://www.youtube.com/embed/BC68uKrBvdg" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                </Modal>

                <Modal
                    isShown={modalStackIsOpen()}
                    closeModal={closeModalStack}
                    modalStyles={{
                        background: "transparent",
                        "min-width": "100%",
                        "height": "100vh",
                        "align-content": "left",
                        "color": "white",
                    }}
                    dismissText="you pretty much have to click me"

                >
                    <XCOMInfoPanel
                        class="h-2/3"
                    >
                        nearly there
                    </XCOMInfoPanel>
                </Modal>
                <Modal
                    isShown={modalStackIsOpen()}
                    closeModal={closeModalStack}
                    dismissText="k"
                >
                    <pre>&nbsp;YOU &nbsp; &nbsp; &nbsp;DON'T{`\n`}
                        MATTER &nbsp; GIVE UP</pre>

                </Modal>
                <Modal
                    isShown={modalStackIsOpen()}
                    closeModal={closeModalStack}
                    dismissText='ACCEPT'
                    modalStyles={{
                        background: "transparent",
                        "width": "90%",
                        "max-width": "666px",
                        "align-content": "left",
                        "color": "white",
                    }}
                >
                    <XCOMOperationBriefing
                        title="Operation: BLURRY MODAL"
                        subtitle="Customizable and accessible modals for solid-js"
                        summary="NOT SURE IF TAILWIND WORKS HERE"
                    >
                        <img src="https://picsum.photos/180/180" alt="random image" class="float-right ml-4" />
                        <p>Bacon ipsum dolor amet tongue hamburger short ribs venison prosciutto swine andouille bresaola kielbasa chuck. Tri-tip pork chop shank ball tip strip steak picanha, chicken cupim bacon sirloin ham fatback chislic.</p>
                        <p>&nbsp</p>
                        <p>Fatback swine frankfurter bresaola short ribs spare ribs, shankle sausage picanha cow sirloin leberkas. Meatloaf hamburger leberkas, meatball ground round sirloin doner brisket shankle porchetta beef ham hock shoulder fatback.</p>
                    </XCOMOperationBriefing>
                </Modal>
                <Modal
                    isShown={modalStackIsOpen()}
                    closeModal={closeModalStack}
                    modalStyles={{
                        background: "transparent",
                        translate: '0 600%',
                    }}
                >
                    qwer
                </Modal>
                <Modal
                    isShown={modalStackIsOpen()}
                    closeModal={closeModalStack}
                    modalStyles={{
                        background: "transparent",
                        "width": "90%",
                        "max-width": "666px",
                        "align-content": "center",
                        "color": "yellow",
                        "font-family": "Comic Sans MS, Comic Sans, cursive",
                        "font-size": "xxx-large",
                        translate: '0 -200%',
                    }}
                    dismissText="Wait, what...?"
                >
                    &nbsp;
                </Modal>



                <button
                    type='button'
                    onClick={() => setModalAboutIsOpen(true)}
                    class='btn btn-accent text-2xl'
                >
                    About
                </button>

                <Modal
                    isShown={modalAboutIsOpen()}
                    closeModal={closeModalAbout}
                    modalStyles={{
                        background: "transparent",
                        "width": "90%",
                        "max-width": "666px",
                        "align-content": "left",
                        "color": "white",
                    }}
                    dismissText="sweet"
                >
                    <XCOMInfoPanel>
                        <h2>Alaricus/solid-dialog</h2>

                        Library: <a href="https://github.com/Alaricus/solid-dialog" target="_blank" rel="noreferrer">github.com/Alaricus/solid-dialog</a><br />
                        <br />
                        Source of this page: <a href="https://github.com/AshSimmonds/solidstart-17/blob/main/src/routes/dialog.tsx" target="_blank" rel="noreferrer">/blob/main/src/routes/dialog.tsx</a><br />
                        <br />
                        <h3>PRs welcome</h3>
                    </XCOMInfoPanel>
                </Modal>

            </div>
        </Layout>
    )
}

export default DialogPage
