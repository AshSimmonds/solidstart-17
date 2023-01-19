import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import Modal from 'solid-dialog'

const DialogPage: VoidComponent = () => {
    const [modalIsOpen, setModalIsOpen] = createSignal(false);
    const closeModal = () => setModalIsOpen(false);

    return (
        <Layout>
            <Title>Dialog examples and testing</Title>
            <h1>Dialog examples and testing</h1>

            <div class="text-center mx-auto ">

                <button
                    type='button'
                    onClick={() => setModalIsOpen(true)}
                >
                    show modal
                </button>
                <Modal
                    isShown={modalIsOpen()}
                    closeModal={closeModal}
                >
                    The modal is being displayed!
                </Modal>
            </div>
        </Layout>
    )
}

export default DialogPage
