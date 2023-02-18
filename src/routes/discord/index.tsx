import type { VoidComponent} from "solid-js"
import { Title } from "solid-start"
import Layout from "~/layouts/Layout"
import LogInOutButton from "~/components/LogInOutButton"


const DiscordPage: VoidComponent = () => {

    return (
        <Layout>
            <Title>Discord</Title>

            <div class="text-center mx-auto ">

                <h2>Join our Discord server to use this app</h2>

                <a href="https://discord.gg/XCa3EtQw" class="btn btn-success" target="_blank" rel="noopener noreferrer">
                    Join Discord server
                </a>

                <br />

                <LogInOutButton />

            </div>
        </Layout>
    )
}

export default DiscordPage
