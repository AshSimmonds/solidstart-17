import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import Modal from 'solid-dialog'

const DialogPage: VoidComponent = () => {
    const [modalBasicIsOpen, setModalBasicIsOpen] = createSignal(false);
    const closeModalBasic = () => setModalBasicIsOpen(false);

    return (
        <Layout>
            <Title>Dialog/modal examples and testing</Title>
            <h1>Dialog/modal examples and testing</h1>

            <div class="text-center mx-auto ">

                <button
                    type='button'
                    onClick={() => setModalBasicIsOpen(true)}
                    class='btn btn-primary text-2xl'
                >
                    show modal
                </button>
                <Modal
                    isShown={modalBasicIsOpen()}
                    closeModal={closeModalBasic}
                >
                    May the blur be with you
                </Modal>
            </div>
        </Layout>
    )
}

export default DialogPage
