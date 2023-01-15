import { A, Title } from "solid-start"
import Layout from "~/layouts/Layout"

export default function TypographyIndexPage() {
    return (
        <Layout>
            <Title>Typography and styling resources</Title>
            <h1>Typography and styling resources</h1>

            <div class="btn-group">
                <A href="/typography-html" class="btn btn-outline">STANDARD HTML</A>

                <A href="/typography-markdown" class="btn btn-outline">MARKDOWN</A>

                <A href="/typography-tailwind" class="btn btn-outline"
                >TAILWIND COMPONENTS</A>
            </div>

            <h2>External resources</h2>

            <div class="btn-group btn-group-vertical">
                <a
                    href="https://docs.astro.build/en/core-concepts/project-structure/"
                    class="btn btn-outline">Astro (framework docs)</a
                >

                <a
                    href="https://tailwindcss.com/docs/configuration"
                    class="btn btn-outline">Tailwind (CSS engine)</a
                >

                <a href="https://daisyui.com/components/" class="btn btn-outline"
                >DaisyUI (components & theming)</a
                >

                <a href="https://themes.ionevolve.com" class="btn btn-outline"
                >IonEvolve (theme builder)</a
                >

                <a href="https://www.hyperui.dev/" class="btn btn-outline"
                >HyperUI (components)</a
                >

                <a href="https://shuffle.dev/editor" class="btn btn-outline"
                >Shuffle (whole page/site builder)</a
                >
            </div>
        </Layout>

    )
}