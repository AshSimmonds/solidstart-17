import type { VoidComponent } from "solid-js"
import { createSignal } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import Modal from "solid-dialog"
import XCOMOperationBriefing from "~/components/XCOMOperationBriefing"

const DialogPage: VoidComponent = () => {
    const [modalBasicIsOpen, setModalBasicIsOpen] = createSignal(false)
    const closeModalBasic = () => setModalBasicIsOpen(false)

    const [modalledWithChildrenIsOpen, setModalledWithChildrenIsOpen] = createSignal(false)
    const closeModalledWithChildren = () => setModalledWithChildrenIsOpen(false)

    return (
        <Layout>
            <Title>Dialog/modal examples and testing</Title>
            <h1>Dialog/modal examples and testing</h1>

            <div class="mx-auto ">

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
                    class='btn btn-primary text-2xl'
                >
                    modalled with children
                </button>
                <Modal
                    isShown={modalledWithChildrenIsOpen()}
                    closeModal={closeModalledWithChildren}
                    dismissText='ACCEPT'
                    modalStyles={{
                        background: "transparent",
                        "min-width": "666px",
                        "align-content": "left",
                        "color": "white",
                    }}
                >
                    <XCOMOperationBriefing
                        title="Operation: BLURRY MODAL"
                        subtitle="Customizable and accessible modals for solid-js"
                        summary="NOT SURE IF TAILWIND WORKS HERE"
                    >
                        <p>Bacon ipsum dolor amet tongue hamburger short ribs venison prosciutto swine andouille bresaola kielbasa chuck. Tri-tip pork chop shank ball tip strip steak picanha, chicken cupim bacon sirloin ham fatback chislic.</p>
                        <p>&nbsp</p>
                        <p>Fatback swine frankfurter bresaola short ribs spare ribs, shankle sausage picanha cow sirloin leberkas. Meatloaf hamburger leberkas, meatball ground round sirloin doner brisket shankle porchetta beef ham hock shoulder fatback.</p>
                    </XCOMOperationBriefing>
                </Modal>

            </div>
        </Layout>
    )
}

export default DialogPage
