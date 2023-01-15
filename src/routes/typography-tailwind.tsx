// TODO: figure out if css can be embedded in the page itself, this is only 1 line which applies only on typography example pages
// import "../styles/typography.module.css"

import { Title } from "solid-start"
import Layout from "~/layouts/Layout"

export default function TypographyHtmlPage() {
    return (
        <Layout>
            <Title>Typography TailwindCSS</Title>

            <p class="alert alert-warning" >
                This page is way outdated, it's mostly just good for previewing colour schemes. TODO: merge with the other typography page.
            </p>

            <hr class="my-8" />

            <a href="https://themes.ionevolve.com/" class="btn btn-info" target="_blank">Theme editor:
                https://themes.ionevolve.com/</a>


            <h2>Colours</h2>

            <div class="m-4 space-x-2 grid grid-cols-3 gap-6 mt-10 text-xs lg:grid-cols-5">

                <div>
                    <div class="w-20 h-20 shadow-lg rounded-box bg-base-100" />
                    <div class="py-4">bg-base-100</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg rounded-box bg-base-200" />
                    <div class="py-4">bg-base-200</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg rounded-box bg-base-300" />
                    <div class="py-4">bg-base-300</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg rounded-box bg-base-content" />
                    <div class="py-4">bg-base-content</div>
                </div>

            </div>
            <div class="m-4 space-x-2 grid grid-cols-3 gap-6 mt-10 text-xs lg:grid-cols-5">

                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-primary" />
                    <div class="py-4">bg-primary</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-primary-focus" />
                    <div class="py-4">bg-primary-focus</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-primary-content" />
                    <div class="py-4">bg-primary-content</div>
                </div>
            </div>

            <div class="m-4 space-x-2 grid grid-cols-3 gap-6 mt-10 text-xs lg:grid-cols-5">
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-secondary" />
                    <div class="py-4">bg-secondary</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-secondary-focus" />
                    <div class="py-4">bg-secondary-focus</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-secondary-content" />
                    <div class="py-4">bg-secondary-content</div>
                </div>
            </div>

            <div class="m-4 space-x-2 grid grid-cols-3 gap-6 mt-10 text-xs lg:grid-cols-5">
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-accent" />
                    <div class="py-4">bg-accent</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-accent-focus" />
                    <div class="py-4">bg-accent-focus</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-accent-content" />
                    <div class="py-4">bg-accent-content</div>
                </div>
            </div>

            <div class="m-4 space-x-2 grid grid-cols-3 gap-6 mt-10 text-xs lg:grid-cols-5">
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-neutral" />
                    <div class="py-4">bg-neutral</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-neutral-focus" />
                    <div class="py-4">bg-neutral-focus</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-neutral-content" />
                    <div class="py-4">bg-neutral-content</div>
                </div>
            </div>

            <div class="m-4 space-x-2 grid grid-cols-3 gap-6 mt-10 text-xs lg:grid-cols-5">
                <div>
                    <div class="w-20 h-20 shadow-lg rounded-box bg-info" />
                    <div class="py-4">bg-info</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg rounded-box bg-success" />
                    <div class="py-4">bg-success</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg rounded-box bg-warning" />
                    <div class="py-4">bg-warning</div>
                </div>
                <div>
                    <div class="w-20 h-20 shadow-lg rounded-box bg-error" />
                    <div class="py-4">bg-error</div>
                </div>
            </div>


            <h2>Buttons</h2>

            <div class="m-4 space-x-2">
                <button class="btn btn-primary">primary</button>
                <button class="btn btn-secondary">secondary</button>
                <button class="btn btn-accent">accent</button>
                <button class="btn btn-neutral">neutral</button>
                <button class="btn btn-disabled">disabled</button>
            </div>

            <div class="m-4 space-x-2">
                <button class="btn btn-primary btn-outline">primary</button>
                <button class="btn btn-secondary btn-outline">secondary</button>
                <button class="btn btn-accent btn-outline">accent</button>
                <button class="btn btn-neutral btn-outline">neutral</button>
                <button class="btn btn-disabled btn-outline">disabled</button>
            </div>

            <div class="m-4 space-x-2">
                <button class="btn btn-info">info</button>
                <button class="btn btn-error">error</button>
                <button class="btn btn-success">success</button>
                <button class="btn btn-warning">warning</button>
            </div>

            <div class="m-4 space-x-2">
                <button class="btn btn-square">square</button>
                <button class="btn btn-circle">circle</button>
                <button class="btn btn-ghost">ghost</button>
                <button class="btn btn-link">link</button>
            </div>

            <div class="m-4 space-x-2">
                <button class="btn btn-wide">wide</button>
                <button class="btn btn-xs">xs</button>
                <button class="btn btn-sm">sm</button>
                <button class="btn btn-md">md</button>
                <button class="btn btn-lg">lg</button>
                <button class="btn btn-xl">xl</button>
            </div>

            <div class="m-4 space-x-2">
                <button class="btn btn-block">block</button>
            </div>

            <div class="m-4 space-x-2">

                <button class="btn">
                    Version 2.7.0

                    <div class="badge ml-2">new</div>
                </button>
                <button class="btn btn-primary">
                    Inbox

                    <div class="badge ml-2 badge-outline">3</div>
                </button>
                <button class="btn btn-secondary btn-outline">
                    Notifications

                    <div class="badge ml-2 badge-outline">+999</div>
                </button>
                <button class="btn btn-accent">
                    accent

                    <div class="badge ml-2 badge-outline">new</div>
                </button>
            </div>

            <div class="m-4 space-x-2">
                <div class="p-20 bg-cover card bg-base-200"
                    style={{"background-image":"url('https://picsum.photos/id/314/400/300')"}}>
                    <button class="btn glass">glass</button>
                </div>
            </div>


            <h2>Tabs</h2>

            <div class="m-4 tabs">
                <button class="tab tab-lifted">Tab 1</button>
                <button class="tab tab-lifted tab-active">Tab 2</button>
                <button class="tab tab-lifted">Tab 3</button>
            </div>

            <h2>Toggles checkbox</h2>

            <div class="m-4 flex space-x-4">
                <input type="checkbox" class="toggle toggle-primary" />
                <input type="checkbox" class="toggle toggle-secondary" />
                <input type="checkbox" class="toggle toggle-accent" />
                <input type="checkbox" class="toggle toggle-mark" />
            </div>

            <h2>Cards</h2>

            <div class="card shadow-2xl w-80 m-4">
                <figure>
                    <img src="https://picsum.photos/id/1005/500/250" alt="asdf" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">DaisyUI Card</h2>
                    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
                </div>
            </div>


            <div class="grid items-center flex-shrink-0 col-span-3 row-span-3 gap-4 p-4 py-8 mx-2 shadow-xl bg-base-100 rounded-box place-items-center xl:mx-0 w-72 xl:w-auto place-self-start">
                <div class="dropdown">
                    <div tabindex="0">
                        <div class="avatar online">
                            <div class="w-24 h-24 p-px mask mask-squircle bg-base-content bg-opacity-10">
                                <img src="https://daisyui.com/tailwind-css-component-profile-1@94w.png" width="94" height="94"
                                    alt="Avatar Tailwind CSS Component" class="mask mask-squircle" />
                            </div>
                        </div>
                    </div>
                    <div tabindex="0" class="py-2 dropdown-content">
                        <div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
                            <div class="card-body">
                                <h2 class="font-extrabold capitalize card-title">avatar component</h2>
                                <p class="text-sm text-neutral-content text-opacity-80">Use avatar component with any size</p>
                                <div class="flex justify-end mt-4">
                                    <a target="blank" href="https://daisyui.com/components/avatar"
                                        class="btn btn-primary btn-sm xl:btn-md"> See component </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="w-full dropdown">
                        <div tabindex="0">
                            <div class="text-center">
                                <div class="text-lg font-extrabold">Betsy Braddock</div>
                                <div class="my-3 text-sm text-base-content text-opacity-60"> Strategic Art Manager <br />
                                    Global
                                    Illustration Observer <br />Business Alignment Developer
                                </div>
                            </div>
                        </div>
                        <div tabindex="0" class="py-2 dropdown-content">
                            <div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
                                <div class="card-body">
                                    <h2 class="font-extrabold capitalize card-title">card component</h2>
                                    <p class="text-sm text-neutral-content text-opacity-80"> Card component is used to show
                                        products, features and more. </p>
                                    <div class="flex justify-end mt-4">
                                        <a target="blank" href="https://daisyui.com/components/card"
                                            class="btn btn-primary btn-sm xl:btn-md"> See component </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full dropdown">
                        <div tabindex="0">
                            <div class="mt-2 text-center">
                                <div class="badge badge-ghost">Design</div>
                                <div class="badge badge-ghost">Art</div>
                                <div class="badge badge-ghost">Illustration</div>
                            </div>
                        </div>
                        <div tabindex="0" class="py-2 dropdown-content">
                            <div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
                                <div class="card-body">
                                    <h2 class="font-extrabold capitalize card-title">badge component</h2>
                                    <p class="text-sm text-neutral-content text-opacity-80"> Use badge component to highlight
                                        small inline items </p>
                                    <div class="flex justify-end mt-4">
                                        <a target="blank" href="https://daisyui.com/components/badge"
                                            class="btn btn-primary btn-sm xl:btn-md"> See component </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dropdown dropdown-top">
                    <div tabindex="0">
                        <div class="btn-group">
                            <button class="btn btn-accent btn-sm">Follow</button>
                            <button aria-label="button component" class="btn btn-accent btn-sm btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div tabindex="0" class="py-2 dropdown-content">
                        <div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
                            <div class="card-body">
                                <h2 class="font-extrabold capitalize card-title">button group component</h2>
                                <p class="text-sm text-neutral-content text-opacity-80">Use it to group multiple buttons
                                    together</p>
                                <div class="flex justify-end mt-4">
                                    <a target="blank" href="https://daisyui.com/components/button-group"
                                        class="btn btn-primary btn-sm xl:btn-md"> See component </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200"
                    style={{"background-image":"url(https://picsum.photos/id/314/1000/300)"}}>
                    <div class="card glass lg:card-side text-neutral-content">
                        <figure class="p-6">
                            <img src="https://picsum.photos/id/1005/300/200" class="rounded-lg shadow-lg" alt="" />
                        </figure>
                        <div class="max-w-md card-body">
                            <h2 class="card-title">Glass</h2>
                            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis
                                sed molestiae voluptates incidunt iure sapiente.</p>
                            <div class="card-actions">
                                <button class="btn glass rounded-full">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card shadow-2xl lg:card-side bg-primary text-primary-content">
                    <div class="card-body">
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
                        <div class="justify-end card-actions">
                            <button class="btn btn-primary">
                                More info

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="inline-block w-6 h-6 ml-2 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card lg:card-side card-bordered">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250" alt="" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Horizontal
                            <div class="badge mx-2">NEW</div>
                        </h2>
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed
                            molestiae voluptates incidunt iure sapiente.</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Get Started</button>
                            <button class="btn btn-ghost">More info</button>
                        </div>
                    </div>
                </div>


                <div class="card shadow-xl image-full">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250" alt="" />
                    </figure>
                    <div class="justify-end card-body">
                        <h2 class="card-title">Image overlay</h2>
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed
                            molestiae voluptates incidunt iure sapiente.</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>


            </div>


            <h2>Alerts</h2>

            <div class="m-4 space-x-2">

                <div class="alert">
                    <div class="flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3"
                            class="w-6 h-6 mx-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                    </div>
                </div>

                <div class="alert alert-info">
                    <div class="flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="w-6 h-6 mx-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                    </div>
                </div>


                <div class="alert alert-success">
                    <div class="flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="w-6 h-6 mx-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                    </div>
                </div>


                <div class="alert alert-warning">
                    <div class="flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="w-6 h-6 mx-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                    </div>
                </div>


                <div class="alert alert-error">
                    <div class="flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="w-6 h-6 mx-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                    </div>
                </div>


                <div class="alert">
                    <div class="flex-1">
                        <label class="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
                    </div>
                    <div class="flex-none">
                        <button class="btn btn-sm btn-ghost mr-2">Cancel</button>
                        <button class="btn btn-sm btn-primary">Apply</button>
                    </div>
                </div>


            </div>

            <h2>Dropdowns</h2>

            <div class="m-4 space-x-2">
                <div class="dropdown m-4">
                    <div tabindex="0" class="m-1 btn">Dropdown</div>
                    <ul tabindex="0" class="p-2 menu dropdown-content bg-neutral text-neutral-content rounded-box w-52">
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>

            <h2>Modals</h2>

            <div class="m-4 space-x-2">
                <label for="my-modal" class="btn modal-button">Modal</label>
                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque.
                            Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
                        <div class="modal-action">
                            <label for="my-modal" class="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Steps</h2>

            <div class="m-4 space-x-2">

                <ul class="steps my-4 w-full">
                    <li class="step step-primary">Register</li>
                    <li class="step step-primary">Choose plan</li>
                    <li class="step">Purchase</li>
                    <li class="step">Receive Product</li>
                </ul>
            </div>


            <h2>Avatars</h2>
            <div class="m-4 space-x-2">
                asdf

                <div class="avatar online m-10">
                    <div class="rounded-full w-24 h-24 not-prose">
                        <img src="https://daisyui.com/tailwind-css-component-profile-1@94w.png" alt="asdf" />
                    </div>
                </div>
                <div class="avatar offline m-10">
                    <div class="rounded-full w-24 h-24">
                        <img src="https://daisyui.com/tailwind-css-component-profile-2@94w.png" alt="asdf" />
                    </div>
                </div>

                <div class="avatar">
                    <div class="mb-8 w-24 h-24 mask mask-squircle">
                        <img src="https://daisyui.com/tailwind-css-component-profile-1@94w.png" alt="" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="mb-8 w-24 h-24 mask mask-hexagon">
                        <img src="https://daisyui.com/tailwind-css-component-profile-1@94w.png" alt="" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="mb-8 w-24 h-24 mask mask-decagon">
                        <img src="https://daisyui.com/tailwind-css-component-profile-1@94w.png" alt="" />
                    </div>
                </div>


                qwer
            </div>

            <h2>Paragraphs with badges</h2>

            <div class="m-4 space-x-2">
                <p>
                    <span class="badge badge-ghost">daisyUI</span> adds some style to <span class="badge badge-ghost">tailwindcss/typography</span>
                    so it will use the same theme as other elements.
                    Just make sure on your tailwind.config.js, you have <span class="badge badge-ghost">daisyUI</span> after
                    <span class="badge badge-ghost">tailwindcss/typography</span>
                </p>
            </div>

            <h2>Pre / Code panel</h2>

            <div class="w-full max-w-xl my-2">
                <div class="shadow-lg mockup-code">
                    <pre><code>module.exports = {
                        <span class="text-neutral-content text-opacity-30">/...</span>
                    }
                        plugins: [
                        require('tailwindcss/typography'),
                        require('daisyui'),
                        ],

                    </code></pre>
                </div>
            </div>

            <h2>Headings</h2>

            <div class="m-4 space-x-2">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </div>

            <h2>Blockquotes</h2>
            <div class="m-4 space-x-2">
                <blockquote>
                    Inventore non totam deserunt est alias ducimus. Corrupti quidem debitis
                    quo corrupti et laborum totam. Ut aperiam et delectus aliquam nulla
                    magnam quis perspiciatis.
                </blockquote>
            </div>

            <h2>Links</h2>
            <div class="m-4 space-x-2">
                Hello, <a href="#">This is a link</a>.
            </div>


            <h2>Text decorators</h2>
            <div class="m-4 space-x-2">
                <p>You can use the mark tag to
                    <mark>highlight</mark>
                    text.
                </p>
                <p>
                    <del>This line of text is meant to be treated as deleted text.</del>
                </p>
                <p>
                    <s>This line of text is meant to be treated as no longer accurate.</s>
                </p>
                <p>
                    <ins>
                        This line of text is meant to be treated as an addition to the
                        document.
                    </ins>
                </p>
                <p>
                    <u>This line of text will render as underlined</u>
                </p>
                <p>
                    <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <p>
                    <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                    <em>This line rendered as italicized text.</em>
                </p>
                <p>
                    <abbr title="attribute">attr</abbr>
                </p>
                <p>
                    <abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
                </p>
            </div>

            <h2>Lists</h2>
            <div class="m-4 space-x-2">
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>
                        Nulla volutpat aliquam velit
                        <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                        </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                </ul>
            </div>


            <h2>List nesting</h2>
            <div class="m-4 space-x-2">
                <ol>
                    <li>
                        <strong>Nested lists are rarely a good idea.</strong>
                        <ul>
                            <li>
                                You might feel like you are being really "organized" or something
                                but you are just creating a gross shape on the screen that is hard
                                to read.
                            </li>
                            <li>
                                Nested navigation in UIs is a bad idea too, keep things as flat as
                                possible.
                            </li>
                            <li>
                                Nesting tons of folders in your source code is also not helpful.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Since we need to have more items, here's another one.</strong>
                        <ul>
                            <li>
                                I'm not sure if we'll bother styling more than two levels deep.
                            </li>
                            <li>
                                Two is already too much, three is guaranteed to be a bad idea.
                            </li>
                            <li>If you nest four levels deep you belong in prison.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Two items isn't really a list, three is good though.</strong>
                        <ul>
                            <li>
                                Again please don't nest lists if you want people to actually read
                                your content.
                            </li>
                            <li>Nobody wants to look at this.</li>
                            <li>I'm upset that we even have to bother styling this.</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <h2>Figures</h2>
            <div class="m-4 space-x-2">
                <figure>
                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                        alt="" />
                    <figcaption>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It
                        has roots in a piece of classical Latin literature from 45 BC, making
                        it over 2000 years old.
                    </figcaption>
                </figure>
            </div>

            <h2>Tables</h2>

            <div class="m-4 space-x-2">
                <table>
                    <thead>
                        <tr>
                            <th>Wrestler</th>
                            <th>Origin</th>
                            <th>Finisher</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bret "The Hitman" Hart</td>
                            <td>Calgary, AB</td>
                            <td>Sharpshooter</td>
                        </tr>
                        <tr>
                            <td>Stone Cold Steve Austin</td>
                            <td>Austin, TX</td>
                            <td>Stone Cold Stunner</td>
                        </tr>
                        <tr>
                            <td>Randy Savage</td>
                            <td>Sarasota, FL</td>
                            <td>Elbow Drop</td>
                        </tr>
                        <tr>
                            <td>Vader</td>
                            <td>Boulder, CO</td>
                            <td>Vader Bomb</td>
                        </tr>
                        <tr>
                            <td>Razor Ramon</td>
                            <td>Chuluota, FL</td>
                            <td>Razor's Edge</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div class="m-4 space-x-2">
                <div class="card shadow-lg compact side bg-base-100">
                    <div class="flex-row items-center space-x-4 card-body">
                        <div>
                            <div class="avatar">
                                <div class="rounded-full w-14 h-14 shadow">
                                    <img src="https://i.pravatar.cc/500?img=32" alt="asdf" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 class="card-title">Janis Johnson</h2>
                            <p class="text-base-content text-opacity-40">Accounts Agent</p>
                        </div>
                    </div>
                </div>
                <div class="card shadow-lg compact side bg-base-100">
                    <div class="flex-row items-center space-x-4 card-body">
                        <div class="flex-1">
                            <h2 class="card-title">Meredith Mayer</h2>
                            <p class="text-base-content text-opacity-40">Data Liaison</p>
                        </div>
                        <div class="flex-0">
                            <button class="btn btn-sm">Follow</button>
                        </div>
                    </div>
                </div>
                <div class="card row-span-3 shadow-lg compact bg-base-100">
                    <figure>
                        <img src="https://picsum.photos/id/1005/600/400" alt="asdf" />
                    </figure>
                    <div class="flex-row items-center space-x-4 card-body">
                        <div>
                            <h2 class="card-title">Karolann Collins</h2>
                            <p class="text-base-content text-opacity-40">Direct Interactions Liaison</p>
                        </div>
                    </div>
                </div>
                <div class="card shadow-lg compact side bg-base-100">
                    <div class="flex-row items-center space-x-4 card-body">
                        <div class="flex-1">
                            <h2 class="card-title text-primary">4,600</h2>
                            <p class="text-base-content text-opacity-40">Page views</p>
                        </div>
                        <div class="flex space-x-2 flex-0">
                            <button class="btn btn-sm btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="inline-block w-6 h-6 stroke-current">

                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />

                                </svg>
                            </button>
                            <button class="btn btn-sm btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="inline-block w-6 h-6 stroke-current">

                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />

                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card shadow-lg compact side bg-base-100">
                    <div class="flex-row items-center space-x-4 card-body">
                        <label class="flex-0">
                            <input type="checkbox" checked class="toggle toggle-primary" />
                        </label>
                        <div class="flex-1">
                            <h2 class="card-title">Enable Notifications</h2>
                            <p class="text-base-content text-opacity-40">To get latest updates</p>
                        </div>
                    </div>
                </div>
                <div class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100">
                    <div class="card-body">
                        <h2 class="my-4 text-4xl font-bold card-title">Top 10 UI Components</h2>
                        <div class="mb-4 space-x-2 card-actions">
                            <div class="badge badge-ghost">Colors</div>
                            <div class="badge badge-ghost">UI Design</div>
                            <div class="badge badge-ghost">Creativity</div>
                        </div>
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed
                            molestiae voluptates incidunt iure sapiente.</p>
                    </div>
                </div>
            </div>
            <div class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <div class="flex-1">
                        <h2 class="flex card-title">
                            <button class="btn btn-ghost btn-sm btn-circle loading" />
                            Downloading...
                        </h2>
                        <progress value="70" max="100" class="progress progress-secondary" />
                    </div>
                    <div class="flex-0">
                        <button class="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <label class="cursor-pointer label">
                        <input type="checkbox" checked class="checkbox checkbox-accent" /> <span class="mx-4 label-text">Enable Autosave</span>
                    </label>
                </div>
            </div>
            <ul class="menu row-span-3 p-4 shadow-lg bg-base-100 rounded-box">
                <li class="menu-title">
                    <span>
                        Menu Title
                    </span>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 mr-2 stroke-current">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />

                        </svg>
                        Item with icon
                    </a>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 mr-2 stroke-current">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />

                        </svg>
                        Item with icon
                    </a>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 mr-2 stroke-current">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />

                        </svg>
                        Item with icon
                    </a>
                </li>
            </ul>
            <div class="alert col-span-1 xl:col-span-2 bg-base-100">
                <div class="flex-1">
                    <label class="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
                </div>
                <div class="flex-none">
                    <button class="btn btn-sm btn-ghost mr-2">Cancel</button>
                    <button class="btn btn-sm btn-primary">Apply</button>
                </div>
            </div>
            <div class="alert col-span-1 xl:col-span-2 alert-info">
                <div class="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

                    </svg>
                    <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                </div>
            </div>
            <div class="alert col-span-1 xl:col-span-2 alert-success">
                <div class="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />

                    </svg>
                    <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                </div>
            </div>


            <h2>Colour palette</h2>

            <div class="mt-20">
                You can use color names in utility classes just like Tailwind's color names.
                <br />
                These are default utility classes that use color names:

                <div class="mt-6 text-sm shadow-lg mockup-code">
                    <pre>  <code>bg-<span class="text-info">_COLOR_NAME_</span>
                        text-<span class="text-info">_COLOR_NAME_</span>
                        border-<span class="text-info">_COLOR_NAME_</span>
                        from-<span class="text-info">_COLOR_NAME_</span>
                        via-<span class="text-info">_COLOR_NAME_</span>
                        to-<span class="text-info">_COLOR_NAME_</span>
                        placeholder-<span class="text-info">_COLOR_NAME_</span>
                        divide-<span class="text-info">_COLOR_NAME_</span>
                        ring-<span class="text-info">_COLOR_NAME_</span>
                        ring-offset-<span class="text-info">_COLOR_NAME_</span></code></pre>
                </div>
                <br />
                For example these are all the background colors:
            </div>
            <div>
                <div class="hidden mt-2 mb-10 text-center xl:block" />
                <div class="mt-2 mb-10 text-center xl:hidden" />
                <div class="mt-6 overflow-x-auto">
                    <table class="table w-full table-compact">
                        <thead>
                            <tr>
                                <th>Class name</th>
                                <th />
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-primary</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-primary" />
                                </td>
                                <td>Primary color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-primary-focus</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-primary-focus" />
                                </td>
                                <td>Primary color - focused</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-primary-content</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-primary-content" />
                                </td>
                                <td>Foreground content color to use on primary color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-secondary</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-secondary" />
                                </td>
                                <td>Secondary color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-secondary-focus</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-secondary-focus" />
                                </td>
                                <td>Secondary color - focused</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-secondary-content</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-secondary-content" />
                                </td>
                                <td>Foreground content color to use on secondary color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-accent</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-accent" />
                                </td>
                                <td>Accent color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-accent-focus</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-accent-focus" />
                                </td>
                                <td>Accent color - focused</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-accent-content</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-accent-content" />
                                </td>
                                <td>Foreground content color to use on accent color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-neutral</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-neutral" />
                                </td>
                                <td>Neutral color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-neutral-focus</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-neutral-focus" />
                                </td>
                                <td>Neutral color - focused</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-neutral-content</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-neutral-content" />
                                </td>
                                <td>Foreground content color to use on neutral color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-base-100</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-base-100" />
                                </td>
                                <td>Base color of page, used for blank backgrounds</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-base-200</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-base-200" />
                                </td>
                                <td>Base color, a little darker</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-base-300</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-base-300" />
                                </td>
                                <td>Base color, even more darker</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-base-content</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-base-content" />
                                </td>
                                <td>Foreground content color to use on base color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-info</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-info" />
                                </td>
                                <td>Info color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-success</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-success" />
                                </td>
                                <td>Success color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-warning</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-warning" />
                                </td>
                                <td>Warning color</td>
                            </tr>
                            <tr>
                                <th class="font-normal">
                                    <span class="font-mono lowercase">bg-error</span>
                                </th>
                                <td>
                                    <span class="inline-block w-6 h-6 border rounded border-opacity-10 bg-error" />
                                </td>
                                <td>Error color</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </Layout>
    )
}

