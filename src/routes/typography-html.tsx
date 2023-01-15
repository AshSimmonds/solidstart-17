import { A, Title } from "solid-start";
import Layout from "~/layouts/Layout";

import H2Tall from "~/styles/H2-tall"

export default function TypographyHtmlPage() {
    return (
        <Layout>
            <H2Tall>
                <Title>Typography</Title>
                <h1>Typography</h1>

                <h2>Paragraphs</h2>
                <p>
                    Bacon ipsum dolor amet salami chislic flank, meatloaf short loin id
                    dolor nisi. Chislic bresaola rump adipisicing capicola, ground round
                    chicken ea salami eu. Tongue sausage turducken nostrud laboris corned
                    beef. Enim do beef ribs pork chop buffalo. Deserunt pork belly
                    incididunt ex capicola swine. Cow fatback duis ball tip nisi, bacon
                    minim strip steak spare ribs cupidatat drumstick.
                </p>

                <h3>Moving gradient background</h3>
                <p class="gradient-background">
                    Id veniam pancetta, picanha voluptate ham fatback excepteur meatloaf
                    sausage shoulder ball tip short loin irure non. Prosciutto sunt
                    incididunt, chicken porchetta exercitation turkey pork belly turducken
                    minim sausage non chuck cow consequat. Ullamco kevin deserunt pariatur
                    quis tongue consequat hamburger jerky dolor in. Aliquip velit veniam
                    biltong. Beef ribs nostrud pork belly, bresaola et turkey culpa
                    tenderloin burgdoggen ex ribeye short loin. Exercitation cupim cow, pig
                    ribeye jerky capicola shank beef ribs landjaeger excepteur.
                </p>

                <h2 id="links" >Links</h2>
                <div >
                    Lorem ipsum <A href="#links">standard link</A> yeah<br />
                    Lorem ipsum <A href="#links" class="link-neutral">class="link-neutral"</A> yeah<br />
                    Lorem ipsum <A href="#links" class="link-primary">class="link-primary"</A> yeah<br />
                    Lorem ipsum <A href="#links" class="link-secondary">class="link-secondary"</A> yeah<br />
                    Lorem ipsum <A href="#links" class="link-accent">class="link-accent"</A> yeah<br />
                    Lorem ipsum <A href="#links" class="link-info">class="link-info"</A> yeah<br />
                    Lorem ipsum <A href="#links" class="link-success">class="link-success"</A> yeah<br />
                    Lorem ipsum <A href="#links" class="link-warning">class="link-warning"</A> yeah<br />
                    Lorem ipsum <A href="#links" class="link-error">class="link-error"</A> nah
                </div>

                <h2 id="links-buttons" >Buttons</h2>

                eg. <code>&lta class="btn ..." &gt<span class="text-accent">blah</span>&lt/a&gt</code>

                <div class="grid grid-cols-2 gap-4 md:grid-cols-4 mt-8">
                    <A href="#links-buttons" class="btn">class="btn"</A>
                    <A href="#links-buttons" class="btn btn-active">class="btn btn-active"</A>

                    <A href="#links-buttons" class="btn btn-primary">class="btn btn-primary"</A>
                    <A href="#links-buttons" class="btn btn-primary btn-active">class="btn btn-primary btn-active"</A>

                    <A href="#links-buttons" class="btn btn-secondary">class="btn btn-secondary"</A>
                    <A href="#links-buttons" class="btn btn-secondary btn-active">class="btn btn-secondary btn-active"</A>

                    <A href="#links-buttons" class="btn btn-accent">class="btn btn-accent"</A>
                    <A href="#links-buttons" class="btn btn-accent btn-active">class="btn btn-accent btn-active"</A>

                    <A href="#links-buttons" class="btn btn-info">class="btn btn-info"</A>
                    <A href="#links-buttons" class="btn btn-success">class="btn btn-success"</A>
                    <A href="#links-buttons" class="btn btn-warning">class="btn btn-warning"</A>
                    <A href="#links-buttons" class="btn btn-error">class="btn btn-error"</A>

                    <A href="#links-buttons" class="btn btn-outline">class="btn btn-outline"</A>
                    <A href="#links-buttons" class="btn btn-primary btn-outline">class="btn btn-primary btn-outline"</A>
                    <A href="#links-buttons" class="btn btn-secondary btn-outline">class="btn btn-secondary btn-outline"</A>
                    <A href="#links-buttons" class="btn btn-accent btn-outline">class="btn btn-accent btn-outline"</A>

                    <A href="#links-buttons" class="btn btn-info btn-outline">class="btn btn-info btn-outline"</A>
                    <A href="#links-buttons" class="btn btn-success btn-outline">class="btn btn-success btn-outline"</A>
                    <A href="#links-buttons" class="btn btn-warning btn-outline">class="btn btn-warning btn-outline"</A>
                    <A href="#links-buttons" class="btn btn-error btn-outline">class="btn btn-error btn-outline"</A>

                    <A href="#links-buttons" class="btn btn-disabled">class="btn btn-disabled"</A>
                    <A href="#links-buttons" class="btn btn-wide">class="btn btn-wide"</A>
                    <A href="#links-buttons" class="btn btn-square">class="btn btn-square"</A>
                    <A href="#links-buttons" class="btn btn-circle">class="btn btn-circle"</A>
                    <A href="#links-buttons" class="btn btn-ghost">class="btn btn-ghost"</A>
                    <A href="#links-buttons" class="btn btn-xs">class="btn btn-xs"</A>
                    <A href="#links-buttons" class="btn btn-sm">class="btn btn-sm"</A>
                    <A href="#links-buttons" class="btn btn-md">class="btn btn-md"</A>
                    <A href="#links-buttons" class="btn btn-lg">class="btn btn-lg"</A>
                    <A href="#links-buttons" class="btn btn-xl">class="btn btn-xl"</A>
                    <A href="#links-buttons" class="btn btn-2xl">class="btn btn-2xl"</A>


                </div>

                <h2>Badges</h2>
                <div class="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
                    <span class="badge">badge</span>
                    <span class="badge badge-primary">badge badge-primary</span>
                    <span class="badge badge-secondary">badge badge-secondary</span>
                    <span class="badge badge-accent">badge badge-accent</span>
                    <span class="badge badge-info">badge badge-info</span>
                    <span class="badge badge-success">badge badge-success</span>
                    <span class="badge badge-warning">badge badge-warning</span>
                    <span class="badge badge-error">badge badge-error</span>
                </div>

                <h2>Tabs (they do not work, need finesse)</h2>
                <div class="tabs">
                    <button class="tab tab-lifted">tab tab-lifted</button>
                    <button class="tab tab-lifted tab-active">tab tab-lifted tab-active</button>
                    <button class="tab tab-lifted">tab tab-lifted</button>
                </div>

                <h2>Progress bars</h2>
                <div class="flex flex-col gap-3 md:w-1/2">
                    <progress value="20" max="100" class="progress">Default</progress>
                    <progress value="25" max="100" class="progress progress-primary">Primary</progress>
                    <progress
                        value="30"
                        max="100"
                        class="progress progress-secondary"
                    >Secondary</progress>
                    <progress value="40" max="100" class="progress progress-accent"
                    >Accent</progress>
                    <progress value="45" max="100" class="progress progress-info"
                    >Info</progress>
                    <progress value="55" max="100" class="progress progress-success"
                    >Success
                    </progress>
                    <progress value="70" max="100" class="progress progress-warning"
                    >Warning
                    </progress>
                    <progress value="90" max="100" class="progress progress-error"
                    >Error
                    </progress>
                </div>

                <h2>Stats card</h2>
                <div class="stats bg-base-300 border-base-300 border md:w-1/2">
                    <div class="stat">
                        <div class="stat-title">Total Page Views</div>
                        <div class="stat-value">89,400</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                </div>

                <h2>Radial progress dials</h2>
                <div
                    class="flex flex-wrap items-center justify-center gap-3 md:w-1/2"
                >
                    <div class="radial-progress" style={{"--value":"60","--size":"3.5rem"}}>
                        60%
                    </div>
                    <div class="radial-progress" style={{"--value":"75","--size":"3.5rem"}}>
                        75%
                    </div>
                    <div class="radial-progress" style={{"--value":"90","--size":"3.5rem"}}>
                        90%
                    </div>
                </div>

                <h2>Toggles</h2>
                <div>
                    <input type="checkbox" class="toggle" checked />
                    <input
                        type="checkbox"
                        class="toggle toggle-primary"
                        checked
                    />
                    <input
                        type="checkbox"
                        class="toggle toggle-secondary"
                        checked
                    />
                    <input
                        type="checkbox"
                        class="toggle toggle-accent"
                        checked
                    />
                </div>

                <h2>Checkboxes</h2>
                <div>
                    <input type="checkbox" class="checkbox" checked />
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary"
                        checked
                    />
                    <input
                        type="checkbox"
                        class="checkbox checkbox-secondary"
                        checked
                    />
                    <input
                        type="checkbox"
                        class="checkbox checkbox-accent"
                        checked
                    />
                </div>

                <h2>Radio selectors</h2>
                <div>
                    <input type="radio" name="radio-1" class="radio" checked />
                    <input
                        type="radio"
                        name="radio-1"
                        class="radio radio-primary"
                    />
                    <input
                        type="radio"
                        name="radio-1"
                        class="radio radio-secondary"
                    />
                    <input
                        type="radio"
                        name="radio-1"
                        class="radio radio-accent"
                    />
                </div>

                <h2>Range sliders</h2>
                <div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="90"
                        class="range range-xs"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="70"
                        class="range range-xs range-primary"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="50"
                        class="range range-xs range-secondary"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="40"
                        class="range range-xs range-accent"
                    />
                </div>


                <h2>Text inputs</h2>
                <div class="flex flex-col gap-4" >
                    <input
                        type="text"
                        placeholder="input"
                        class="input"
                    />
                    <input
                        type="text"
                        placeholder="input input-bordered"
                        class="input input-bordered"
                    />
                    <input
                        type="text"
                        placeholder="input input-primary"
                        class="input input-primary"
                    />
                    <input
                        type="text"
                        placeholder="input input-secondary"
                        class="input input-secondary"
                    />
                    <input
                        type="text"
                        placeholder="input input-accent"
                        class="input input-accent"
                    />
                    <input
                        type="text"
                        placeholder="input input-info"
                        class="input input-info"
                    />
                    <input
                        type="text"
                        placeholder="input input-success"
                        class="input input-success"
                    />
                    <input
                        type="text"
                        placeholder="input input-warning"
                        class="input input-warning"
                    />
                    <input
                        type="text"
                        placeholder="input input-error"
                        class="input input-error"
                    />
                </div>


                <h2>Textareas</h2>
                <div class="flex flex-col gap-4">
                    <textarea
                        placeholder="textarea"
                        class="textarea"
                     />
                    <textarea
                        placeholder="textarea textarea-bordered"
                        class="textarea textarea-bordered"
                     />
                    <textarea
                        placeholder="textarea textarea-primary"
                        class="textarea textarea-primary"
                     />
                    <textarea
                        placeholder="textarea textarea-secondary"
                        class="textarea textarea-secondary"
                     />
                    <textarea
                        placeholder="textarea textarea-accent textarea-bordered w-full"
                        class="textarea textarea-accent textarea-bordered w-full"
                     />
                    <textarea
                        placeholder="textarea textarea-info textarea-bordered w-full"
                        class="textarea textarea-info textarea-bordered w-full"
                     />
                    <textarea
                        placeholder="textarea textarea-success textarea-bordered w-full"
                        class="textarea textarea-success textarea-bordered w-full"
                     />
                    <textarea
                        placeholder="textarea textarea-warning textarea-bordered w-full"
                        class="textarea textarea-warning textarea-bordered w-full"
                     />
                    <textarea
                        placeholder="textarea textarea-error textarea-bordered w-full"
                        class="textarea textarea-error textarea-bordered w-full"
                     />
                </div>




                <h2>Text sizes</h2>
                <div class="flex flex-grow flex-col gap-3">
                    <div class="text-4xl">text-4xl</div>
                    <div class="text-3xl">text-3xl</div>
                    <div class="text-2xl">text-2xl</div>
                    <div class="text-xl">text-xl</div>
                    <div class="text-lg">text-lg</div>
                    <div class="text-sm">text-sm</div>
                    <div class="text-xs">text-xs</div>
                </div>

                <h2>Progress steps</h2>
                <div>
                    <ul class="steps steps-vertical">
                        <li class="step step-primary">step step-primary</li>
                        <li class="step step-primary">step step-primary2</li>
                        <li class="step">step</li>
                        <li class="step">step</li>
                    </ul>
                </div>

                <h2>Alerts</h2>
                <div class="flex flex-col gap-3">
                    <div class="alert">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="stroke-info h-6 w-6 flex-shrink-0"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                 />
                            </svg>
                            <span>alert</span>
                        </div>
                    </div>
                    <div class="alert alert-info">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="h-6 w-6 flex-shrink-0 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                 />
                            </svg>
                            <span>alert alert-info</span>
                        </div>
                    </div>
                    <div class="alert alert-success">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 flex-shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                 />
                            </svg>
                            <span>alert alert-success</span>
                        </div>
                    </div>
                    <div class="alert alert-warning">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 flex-shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                 />
                            </svg>
                            <span>alert alert-warning</span>
                        </div>
                    </div>
                    <div class="alert alert-error">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 flex-shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                 />
                            </svg>
                            <span>alert alert-error</span>
                        </div>
                    </div>
                </div>

                <h2>Typography</h2>
                <div
                    class="min-h-screen py-8 flex flex-col justify-center relative overflow-hidden lg:py-12"
                >
                    <div
                        class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
                     />
                    <div
                        class="relative w-full px-6 py-12 bg-base-300 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28"
                    >
                        <div class="max-w-prose mx-auto lg:text-lg">
                            <svg class="h-6" fill="none" viewBox="0 0 297 24">
                                <path
                                    class="fill-sky-400"
                                    fill-rule="evenodd"
                                    d="M19.418.523c-5.178 0-8.415 2.589-9.71 7.767 1.943-2.59 4.208-3.56 6.797-2.913 1.477.37 2.533 1.44 3.702 2.627 1.903 1.933 4.107 4.17 8.92 4.17 5.178 0 8.414-2.59 9.708-7.768-1.941 2.59-4.207 3.56-6.796 2.913-1.477-.37-2.533-1.441-3.702-2.628C26.434 2.76 24.23.523 19.417.523zm-9.71 11.65c-5.177 0-8.413 2.59-9.708 7.767 1.942-2.589 4.207-3.56 6.796-2.913 1.477.37 2.533 1.441 3.702 2.628 1.904 1.932 4.107 4.169 8.92 4.169 5.178 0 8.414-2.59 9.709-7.767-1.942 2.589-4.208 3.56-6.797 2.912-1.477-.369-2.533-1.44-3.701-2.627-1.904-1.932-4.108-4.169-8.92-4.169z"
                                    clip-rule="evenodd" />
                                <path
                                    class="fill-slate-900"
                                    d="M59.31 8.962v-2.79h-3.328V2.414l-2.898.858v2.898h-2.468v2.79h2.468v6.44c0 3.489 1.771 4.723 6.225 4.186v-2.602c-2.2.107-3.327.134-3.327-1.584v-6.44h3.327zM72.013 6.171v1.905c-1.02-1.395-2.603-2.254-4.696-2.254-3.649 0-6.68 3.06-6.68 7.057 0 3.971 3.031 7.057 6.68 7.057 2.093 0 3.676-.859 4.696-2.28v1.931h2.897V6.171h-2.897zm-4.24 11.001c-2.415 0-4.24-1.797-4.24-4.293 0-2.495 1.825-4.293 4.24-4.293s4.24 1.798 4.24 4.293c0 2.496-1.825 4.293-4.24 4.293zM79.737 4.159c1.02 0 1.852-.859 1.852-1.851 0-1.02-.832-1.852-1.852-1.852s-1.851.832-1.851 1.852c0 .992.832 1.85 1.851 1.85zm-1.449 15.428h2.898V6.171h-2.898v13.416zM84.55 19.587h2.898V0h-2.897v19.587zM106.268 6.171l-2.629 9.257-2.791-9.257h-2.763l-2.818 9.257-2.602-9.257h-3.06l4.213 13.416h2.844l2.818-9.042 2.79 9.042h2.844l4.213-13.416h-3.059zM112.91 4.159c1.019 0 1.851-.859 1.851-1.851 0-1.02-.832-1.852-1.851-1.852-1.02 0-1.852.832-1.852 1.852 0 .992.832 1.85 1.852 1.85zm-1.449 15.428h2.898V6.171h-2.898v13.416zM124.78 5.822c-1.824 0-3.273.671-4.159 2.067V6.17h-2.898v13.416h2.898v-7.19c0-2.738 1.503-3.865 3.408-3.865 1.824 0 3.005 1.074 3.005 3.113v7.942h2.898V11.35c0-3.488-2.147-5.528-5.152-5.528zM143.677.805v7.271c-1.019-1.395-2.602-2.254-4.695-2.254-3.649 0-6.681 3.06-6.681 7.057 0 3.971 3.032 7.057 6.681 7.057 2.093 0 3.676-.859 4.695-2.28v1.931h2.898V.805h-2.898zm-4.239 16.367c-2.415 0-4.239-1.797-4.239-4.293 0-2.495 1.824-4.293 4.239-4.293s4.239 1.798 4.239 4.293c0 2.496-1.824 4.293-4.239 4.293z"
                                 />
                                <path
                                    class="fill-sky-400"
                                    d="M161.544 5.748h-10.182v2.61h3.717v11.23h2.728V8.357h3.737v-2.61zM175.997 5.748h-3.084l-3.005 5.773-3.006-5.773h-3.084l4.725 8.442v5.397h2.709V14.19l4.745-8.442zM184.461 5.748h-5.16v13.84h2.728V15.04h2.432c2.669 0 4.725-2.056 4.725-4.646s-2.056-4.646-4.725-4.646zm0 6.741h-2.432V8.3h2.432c1.166 0 2.016.889 2.016 2.095 0 1.186-.85 2.095-2.016 2.095zM199.387 19.864c3.994 0 7.196-3.163 7.196-7.197 0-4.053-3.202-7.196-7.196-7.196-3.994 0-7.177 3.143-7.177 7.196 0 4.034 3.183 7.197 7.177 7.197zm0-2.67c-2.511 0-4.468-1.877-4.468-4.527 0-2.669 1.957-4.547 4.468-4.547s4.468 1.878 4.468 4.547c0 2.65-1.957 4.528-4.468 4.528zM224.061 12.153h-6.94v2.412h4.191c-.474 1.582-1.858 2.63-4.033 2.63-2.886 0-4.725-1.938-4.725-4.508 0-2.63 1.898-4.567 4.527-4.567 1.681 0 3.085.81 3.717 1.918l2.333-1.345c-1.166-1.897-3.4-3.222-6.03-3.222-4.132 0-7.256 3.203-7.256 7.216 0 3.954 3.085 7.177 7.414 7.177 3.974 0 6.802-2.65 6.802-6.643v-1.068zM235.57 19.587h2.946l-3.064-5.22c1.581-.73 2.669-2.293 2.669-4.033 0-2.53-2.057-4.586-4.607-4.586h-5.536v13.84h2.729v-4.805h2.076l2.787 4.804zm-4.863-11.289h2.807c1.028 0 1.878.89 1.878 2.037 0 1.146-.85 2.056-1.878 2.056h-2.807V8.298zM250.996 19.587h2.966l-4.864-13.84h-3.38l-4.844 13.84h2.946l.83-2.491h5.516l.83 2.491zm-5.476-5.041l1.898-5.655 1.898 5.655h-3.796zM262.443 5.748h-5.16v13.84h2.728V15.04h2.432c2.669 0 4.725-2.056 4.725-4.646s-2.056-4.646-4.725-4.646zm0 6.741h-2.432V8.3h2.432c1.167 0 2.017.889 2.017 2.095 0 1.186-.85 2.095-2.017 2.095zM278.79 5.748v5.496h-5.14V5.748h-2.728v13.84h2.728v-5.734h5.14v5.733h2.709V5.747h-2.709zM297 5.748h-3.084l-3.005 5.773-3.006-5.773h-3.084l4.725 8.442v5.397h2.709V14.19L297 5.748z"
                                 />
                            </svg>
                        </div>
                        <div class="mt-8 mx-auto lg:prose-lg">
                            <p class="lead">
                                Until now, trying to style an article, document, or blog
                                post with Tailwind has been a tedious task that required a
                                keen eye for typography and a lot of complex custom CSS.
                            </p>
                            <p>
                                By default, Tailwind removes all of the default browser
                                styling from paragraphs, headings, lists and more. This ends
                                up being really useful for building application UIs because
                                you spend less time undoing user-agent styles, but when you <em
                                >really are</em
                                > just trying to style some content that came from a rich-text
                                editor in a CMS or a markdown file, it can be surprising and
                                unintuitive.
                            </p>
                            <p>
                                We get lots of complaints about it actually, with people
                                regularly asking us things like:
                            </p>
                            <blockquote>
                                <p>
                                    Why is Tailwind removing the default styles on my <code
                                    >h1</code
                                    > elements? How do I disable this? What do you mean I lose
                                    all the other base styles too?
                                </p>
                            </blockquote>
                            <p>
                                We hear you, but we're not convinced that simply disabling
                                our base styles is what you really want. You don't want to
                                have to remove annoying margins every time you use a <code
                                >p</code
                                > element in a piece of your dashboard UI. And I doubt you really
                                want your blog posts to use the user-agent styles either — you
                                want them to look <em>awesome</em>, not awful.
                            </p>
                            <p>
                                The <code>@tailwindcss/typography</code> plugin is our attempt
                                to give you what you <em>actually</em>
                                want, without any of the downsides of doing something stupid
                                like disabling our base styles.
                            </p>
                            <p>
                                It adds a new <code>prose</code> class that you can slap on any
                                block of vanilla HTML content and turn it into a beautiful, well-formatted
                                document:
                            </p>
                            <pre><code class="language-html">&lt;article class="prose"&gt;
                                &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
                                &lt;p&gt;
                                For years parents have espoused the health benefits of eating garlic bread with cheese to their
                                children, with the food earning such an iconic status in our culture that kids will often dress
                                up as warm, cheesy loaf for Halloween.
                                &lt;/p&gt;
                                &lt;p&gt;
                                But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                                springing up around the country.
                                &lt;/p&gt;
                                &lt;!-- ... --&gt;
                                &lt;/article&gt;
                            </code></pre>
                            <p>
                                For more information about how to use the plugin and the
                                features it includes, <a
                                    href="https://github.com/tailwindcss/typography/blob/master/README.md"
                                >read the documentation</a
                                >.
                            </p>
                            <hr />
                            <h2>What to expect from here on out</h2>
                            <p>
                                What follows from here is just a bunch of absolute nonsense
                                I've written to dogfood the plugin itself. It includes every
                                sensible typographic element I could think of, like <strong
                                >bold text</strong
                                >, unordered lists, ordered lists, code blocks, block
                                quotes, <em>and even italics</em>.
                            </p>
                            <p>
                                It's important to cover all of these use cases for a few
                                reasons:
                            </p>
                            <ol>
                                <li>We want everything to look good out of the box.</li>
                                <li>
                                    Really just the first reason, that's the whole point of
                                    the plugin.
                                </li>
                                <li>
                                    Here's a third pretend reason though a list with three
                                    items looks more realistic than a list with two items.
                                </li>
                            </ol>
                            <p>Now we're going to try out another header style.</p>
                            <h3>Typography should be easy</h3>
                            <p>
                                So that's a header for you — with any luck if we've done our
                                job correctly that will look pretty reasonable.
                            </p>
                            <p>Something a wise person once told me about typography is:</p>
                            <blockquote>
                                <p>
                                    Typography is pretty important if you don't want your
                                    stuff to look like trash. Make it good then it won't be
                                    bad.
                                </p>
                            </blockquote>
                            <p>
                                It's probably important that images look okay here by
                                default as well:
                            </p>
                            <figure>
                                <img
                                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                                    alt=""
                                />
                                <figcaption>
                                    Contrary to popular belief, Lorem Ipsum is not simply
                                    random text. It has roots in a piece of classical Latin
                                    literature from 45 BC, making it over 2000 years old.
                                </figcaption>
                            </figure>
                            <p>
                                Now I'm going to show you an example of an unordered list to
                                make sure that looks good, too:
                            </p>
                            <ul>
                                <li>So here is the first item in this list.</li>
                                <li>In this example we're keeping the items short.</li>
                                <li>Later, we'll use longer, more complex list items.</li>
                            </ul>
                            <p>And that's the end of this section.</p>
                            <h2>What if we stack headings?</h2>
                            <h3>We should make sure that looks good, too.</h3>
                            <p>
                                Sometimes you have headings directly underneath each other.
                                In those cases you often have to undo the top margin on the
                                second heading because it usually looks better for the
                                headings to be closer together than a paragraph followed by
                                a heading should be.
                            </p>
                            <h3>When a heading comes after a paragraph …</h3>
                            <p>
                                When a heading comes after a paragraph, we need a bit more
                                space, like I already mentioned above. Now let's see what a
                                more complex list would look like.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        <strong
                                        >I often do this thing where list items have
                                            headings.</strong>
                                    </p>
                                    <p>
                                        For some reason I think this looks cool which is
                                        unfortunate because it's pretty annoying to get the
                                        styles right.
                                    </p>
                                    <p>
                                        I often have two or three paragraphs in these list
                                        items, too, so the hard part is getting the spacing
                                        between the paragraphs, list item heading, and
                                        separate list items to all make sense. Pretty tough
                                        honestly, you could make a strong argument that you
                                        just shouldn't write this way.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong
                                        >Since this is a list, I need at least two
                                            items.</strong>
                                    </p>
                                    <p>
                                        I explained what I'm doing already in the previous
                                        list item, but a list wouldn't be a list if it only
                                        had one item, and we really want this to look
                                        realistic. That's why I've added this second list
                                        item so I actually have something to look at when
                                        writing the styles.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong
                                        >It's not a bad idea to add a third item either.</strong>
                                    </p>
                                    <p>
                                        I think it probably would've been fine to just use
                                        two items but three is definitely not worse, and
                                        since I seem to be having no trouble making up
                                        arbitrary things to type, I might as well include
                                        it.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                After this sort of list I usually have a closing statement
                                or paragraph, because it kinda looks weird jumping right to
                                a heading.
                            </p>
                            <h2>Code should look okay by default.</h2>
                            <p>
                                I think most people are going to use <a
                                    href="https://highlightjs.org/">highlight.js</a
                                > or <a href="https://prismjs.com/">Prism</a> or something if
                                they want to style their code blocks but it wouldn't hurt to
                                make them look <em>okay</em> out of the box, even with no syntax
                                highlighting.
                            </p>
                            <p>
                                Here's what a default <code>tailwind.config.js</code> file looks
                                like at the time of writing:
                            </p>
                            <pre><code class="language-js">module.exports = _
                                purge: [],
                                theme: _
                                extend: __,
                                { },
                                variants: __,
                                plugins: __,
                                _
                            </code></pre>
                            <p>Hopefully that looks good enough to you.</p>
                            <h3>What about nested lists?</h3>
                            <p>
                                Nested lists basically always look bad which is why editors
                                like Medium don't even let you do it, but I guess since some
                                of you goofballs are going to do it we have to carry the
                                burden of at least making it work.
                            </p>
                            <ol>
                                <li>
                                    <strong>Nested lists are rarely a good idea.</strong>
                                    <ul>
                                        <li>
                                            You might feel like you are being really
                                            "organized" or something but you are just
                                            creating a gross shape on the screen that is
                                            hard to read.
                                        </li>
                                        <li>
                                            Nested navigation in UIs is a bad idea too, keep
                                            things as flat as possible.
                                        </li>
                                        <li>
                                            Nesting tons of folders in your source code is
                                            also not helpful.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong
                                    >Since we need to have more items, here's another
                                        one.</strong
                                    >
                                    <ul>
                                        <li>
                                            I'm not sure if we'll bother styling more than
                                            two levels deep.
                                        </li>
                                        <li>
                                            Two is already too much, three is guaranteed to
                                            be a bad idea.
                                        </li>
                                        <li>
                                            If you nest four levels deep you belong in
                                            prison.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong
                                    >Two items isn't really a list, three is good
                                        though.</strong
                                    >
                                    <ul>
                                        <li>
                                            Again please don't nest lists if you want people
                                            to actually read your content.
                                        </li>
                                        <li>Nobody wants to look at this.</li>
                                        <li>
                                            I'm upset that we even have to bother styling
                                            this.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                            <p>
                                The most annoying thing about lists in Markdown is that <code
                                >&lt;li&gt;</code
                                > elements aren't given a child <code>&lt;p&gt;</code> tag unless
                                there are multiple paragraphs in the list item. That means I
                                have to worry about styling that annoying situation too.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        <strong
                                        >For example, here's another nested list.</strong>
                                    </p>
                                    <p>But this time with a second paragraph.</p>
                                    <ul>
                                        <li>
                                            These list items won't have <code
                                            >&lt;p&gt;</code
                                            > tags
                                        </li>
                                        <li>Because they are only one line each</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>
                                        <strong
                                        >But in this second top-level list item, they
                                            will.</strong>
                                    </p>
                                    <p>
                                        This is especially annoying because of the spacing
                                        on this paragraph.
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                                As you can see here, because I've added a
                                                second line, this list item now has a
                                                <code>&lt;p&gt;</code>
                                                tag.
                                            </p>
                                            <p>
                                                This is the second line I'm talking about by
                                                the way.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Finally here's another list item so it's
                                                more like a list.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>
                                        A closing list item, but with no nested list,
                                        because why not?
                                    </p>
                                </li>
                            </ul>
                            <p>And finally a sentence to close off this section.</p>
                            <h2>There are other elements we need to style</h2>
                            <p>
                                I almost forgot to mention links, like <a
                                    href="https://tailwindcss.com"
                                >this link to the Tailwind CSS website</a
                                >. We almost made them blue but that's so yesterday, so we
                                went with dark gray, feels edgier.
                            </p>
                            <p>We even included table styles, check it out:</p>
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
                            <p>
                                We also need to make sure inline code looks good, like if I
                                wanted to talk about
                                <code>&lt;span&gt;</code> elements or tell you the good news
                                about
                                <code>@tailwindcss/typography</code>.
                            </p>
                            <h3>Sometimes I even use <code>code</code> in headings</h3>
                            <p>
                                Even though it's probably a bad idea, and historically I've
                                had a hard time making it look good. This
                                <em>"wrap the code blocks in backticks"</em> trick works pretty
                                well though really.
                            </p>
                            <p>
                                Another thing I've done in the past is put a <code
                                >code</code
                                > tag inside of a link, like if I wanted to tell you about the
                                <a href="https://github.com/tailwindcss/docs"
                                ><code>tailwindcss/docs</code>
                                </a>
                                repository. I don't love that there is an underline below the
                                backticks but it is absolutely not worth the madness it would
                                require to avoid it.
                            </p>
                            <h4>We haven't used an <code>h4</code> yet</h4>
                            <p>
                                But now we have. Please don't use <code>h5</code> or <code
                                >h6</code
                                > in your content, Medium only supports two heading levels for
                                a reason, you animals. I honestly considered using a
                                <code>before</code>
                                pseudo-element to scream at you if you use an <code>h5</code
                                > or <code>h6</code>.
                            </p>
                            <p>
                                We don't style them at all out of the box because <code
                                >h4</code
                                > elements are already so small that they are the same size as
                                the body copy. What are we supposed to do with an <code
                                >h5</code
                                >, make it <em>smaller</em>
                                than the body copy? No thanks.
                            </p>
                            <h3>We still need to think about stacked headings though.</h3>
                            <h4>
                                Let's make sure we don't screw that up with <code>h4</code> elements,
                                either.
                            </h4>
                            <p>
                                Phew, with any luck we have styled the headings above this
                                text and they look pretty good.
                            </p>
                            <p>
                                Let's add a closing paragraph here so things end with a
                                decently sized block of text. I can't explain why I want
                                things to end that way but I have to assume it's because I
                                think things will look weird or unbalanced if there is a
                                heading too close to the end of the document.
                            </p>
                            <p>
                                What I've written here is probably long enough, but adding
                                this final sentence can't hurt.
                            </p>
                        </div>
                    </div>
                </div>
            </H2Tall>
        </Layout>
    )
}
