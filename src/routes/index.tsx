// import { createQuery, useQueryClient } from '@adeora/solid-query';
import { createQuery } from "@tanstack/solid-query";
import type { VoidComponent } from "solid-js";
// import { Show } from "solid-js";
import { createSignal, For, Suspense } from "solid-js";
import { Title } from "solid-start";
// import { A, Title } from "solid-start"
import server$ from "solid-start/server"
import CheckboxShowHide from '~/components/CheckboxShowHide';
import XCOMOperationBriefing from "~/components/XCOMOperationBriefing";
import Layout from "~/layouts/Layout"
import { trpc } from "~/utils/trpc";


const serverGday = server$((message: string) => {
  const theMediumIsNotTheMessage = `G'day from SERVER, ${message}`
  console.log(theMediumIsNotTheMessage)

  return theMediumIsNotTheMessage
})

const clientGday = (message: string) => {
  const theMediumIsNotTheMessage = `G'day from CLIENT, ${message}`
  console.log(theMediumIsNotTheMessage)

  return theMediumIsNotTheMessage
}

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}


const Home: VoidComponent = () => {

  const clientMessage = clientGday('dude')
  const serverMessage = serverGday('sweet')

  const [postId, setPostId] = createSignal(1);

  const queryInRoute = createQuery(() => ({
    queryKey: ['postsInRoute', postId()],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/' + postId()
      ).then((res) => res.json());
      return [response] as PostData[];
    },
  }));


  // TODO: figure out why this works, I can't recall
  const exampleRouter = trpc.useContext().exampleRouter


  const queryViaTrpc = createQuery(() => ({
    queryKey: ["postsInTrpc", postId()],
    queryFn: async () => {

      const response = exampleRouter.jsonplaceholder
        .fetch({
          id: 100 - postId(),
        })


      // this method returns the data as a subset of it's own data

      // const response = await trpc.exampleRouter.jsonplaceholder
      //   .useQuery(() => ({
      //     id: 100 - postId(),
      //   }))

      return response
    },
  }));




  return (
    <Layout hideHeader='' hideFooter=''>
      <Title>SolidStart SSR | Solid @tanstack/query v5 test | tRPC</Title>
      <h1>SolidStart SSR | Solid @tanstack/query v5</h1>
      <h2>Testing createQuery(fetch) in route vs tRPC</h2>

      <div class="bg-base-100 p-4 mt-4 mb-4" >

        <h3 class="mt-0">Current problems <a href="https://github.com/AshSimmonds/solidstart-17/issues" class="btn text-xs btn-sm btn-secondary btn-outline" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" class="w-6 mr-2" /> github issues</a></h3>

        

        <CheckboxShowHide showWhat='background details and problems' >

          <div class="mt-8">

            setting <code>ssr: true</code> in <a href="https://github.com/AshSimmonds/solidstart-17/blob/main/vite.config.ts" target="_blank">vite.config.ts</a>

            <pre>
              <ul  >
                <li>several second delay before rendering</li>
                <li>getting <code>serverless function has crashed</code> on Vercel occasionally</li>
                <li>some elements don't render</li>
                <li>bunch of DOM hydration warnings in the dev console</li>
                <li>clicking <code>prev</code> and <code>next</code> buttons jumps to top of page</li>
                <li>harsh page flash on fetching new data</li>
              </ul>
            </pre>

            <div class="text-center mx-auto w-2/3 min-h-48 mt-4 ">
              Try going to <a href="/blank">blank page</a> then back here to see full render
            </div>

            <h3>Resources:</h3>
            Iterating on conversations on Twitter here:
            <div class="mt-1 mb-4">
              <code class="text-xs">https://twitter.com/aryan__deora/status/1613564289180213249</code>
            </div>

            And on Discord here:

            <div class="mt-1">
              <code class="text-xs">https://discord.com/channels/722131463138705510/1063020750472237106/1063020750472237106
              </code>
            </div>
          </div>
        </CheckboxShowHide>

      </div>

      <div class="text-center mx-auto w-1/2 mt-8 mb-8">
        <button class="btn btn-secondary btn-outline"
          onClick={() => {
            setPostId((id) => (id === 1 ? 1 : id - 1));
          }}
        >
          Previous Page
        </button>
        <button class="btn btn-secondary btn-outline"
          onClick={() => {
            setPostId((id) => (id === 100 ? 100 : id + 1));
          }}
        >
          Next Page
        </button>
      </div>




      <div class="mx-auto md:w-2/3 min-h-48 ">

        <Suspense>
          <For each={queryInRoute.data}>
            {(post) => (
              <XCOMOperationBriefing
                title="Embedded in route"
                subtitle={`${post.title}`}
                summary={`ID: ${post.id} - https://jsonplaceholder.typicode.com/posts/${post.id}`}
                icon={<img src="https://avatars.githubusercontent.com/u/72518640" class="w-12 mx-2" />}
              >
                {post.body}
              </XCOMOperationBriefing>
            )}
          </For>
        </Suspense>

        <div class="text-left" >
          <CheckboxShowHide showWhat='metadata'>
            <pre >
              {JSON.stringify(queryInRoute, null, 2)}
            </pre>
          </CheckboxShowHide>
        </div>
      </div>


      <div class="mx-auto md:w-2/3 min-h-48 ">

        <Suspense>
          <For each={queryViaTrpc.data}>
            {(post) => (
              <XCOMOperationBriefing
                title="via tRPC"
                subtitle={`${post.title}`}
                summary={`ID: ${post.id} - https://jsonplaceholder.typicode.com/posts/${post.id}`}
                class="mt-16"
                icon={<img src="https://avatars.githubusercontent.com/u/78011399" class="w-12 mx-2" />}
              >
                {post.body}
              </XCOMOperationBriefing>
            )}
          </For>
        </Suspense>
        <div class="text-left" >
          <CheckboxShowHide showWhat='metadata'>
            <pre >
              {JSON.stringify(queryViaTrpc, null, 2)}
            </pre>
          </CheckboxShowHide>
        </div>
      </div>

    </Layout>
  )
}


export default Home
