import { For } from "solid-js"
import type { Component, JSX, VoidComponent } from "solid-js"
import { A, Title } from "solid-start"
import Layout from "~/layouts/Layout"
import Alert from "~/components/Alert"

const fontFamilies = ["hacker", "casio", "c64", "coder", "gamer", "pentium"]

const FontPage: VoidComponent = () => {
    return (
        <Layout>
            <Title>Fonts</Title>
            <h1>Fonts</h1>


            <div class="text-xs hidden">
                TODO: figure out why this hack is needed to get the font to load
                <span class="font-hacker" >asdf</span>
                <span class="font-casio" >asdf</span>
                <span class="font-c64" >asdf</span>
                <span class="font-coder" >asdf</span>
                <span class="font-gamer" >asdf</span>
                <span class="font-pentium" >asdf</span>
            </div>


            <div class="mx-auto md:w-3/4">

                <For each={fontFamilies}>
                    {(family) => (
                        <FontCard family={family} class="w-full" />
                    )}
                </For>

            </div>

            <Alert severity="warning" class="mt-24" showSeverityIcon={true} >TODO: put this into <A href="/typography">Typography</A></Alert>
        </Layout>
    )
}

export default FontPage



interface FontCardProps {
    family: string,
    class?: string,
    children?: JSX.Element
}

const FontCard: Component<FontCardProps> = (props) => {
    return (
        <div class={` font-${props.family} ${props.class} `}>
            <h2>{props.family}</h2>
            {props.children}
            <br />
            |...|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|<br />
            1   5    10   15   20   25   30   35   40   45   50   55   60   65   70   75   80<br />
            The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the<br />
            iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
            ...................................... 012340123401234012340123401234012340123
        </div>
    )
}
