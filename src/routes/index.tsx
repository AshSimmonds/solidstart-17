import { createQuery, useQueryClient } from "@tanstack/solid-query";
// import { createQuery, useQueryClient } from '@adeora/solid-query';
import type { VoidComponent } from "solid-js";
import { createSignal, For, Suspense } from "solid-js";
import { Title } from "solid-start"
import server$ from "solid-start/server"
import Layout from "~/layouts/Layout"


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
    queryKey: ['posts', postId()],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/' + postId()
      ).then((res) => res.json());
      return [response] as PostData[];
    },
  }));


  return (
    <Layout hideHeader='' hideFooter=''>
      <Title>SolidStart | Solid @tanstack/query v5 | tRPC</Title>
      <h1>SolidStart | Solid @tanstack/query v5 | tRPC</h1>


      <div class="text-center mx-auto w-1/2 ">
        <button class="btn btn-sm btn-secondary btn-outline"
          onClick={() => {
            setPostId((id) => (id === 1 ? 1 : id - 1));
          }}
        >
          Previous Page
        </button>
        <button class="btn btn-sm btn-accent btn-outline"
          onClick={() => {
            setPostId((id) => (id === 100 ? 100 : id + 1));
          }}
        >
          Next Page
        </button>
      </div>



      <h2>query embedded in route</h2>

      <div class="text-center mx-auto w-1/2 h-52 ">

        <Suspense>
          <For each={queryInRoute.data}>
            {(post) => (
              <div>
                <h3>ID: {post.id} - {post.title}</h3>
                <p>{post.body}</p>
                <code class="mt-4 text-xs">https://jsonplaceholder.typicode.com/posts/{post.id}</code>
                <pre class="hidden">
                  {JSON.stringify(post, null, 2)}
                </pre>
              </div>
            )}
          </For>
        </Suspense>
      </div>

      <pre class="hidden">
        {JSON.stringify(queryInRoute, null, 2)}
      </pre>

      <div class="bg-base-100 p-4 mt-12" >
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

    </Layout>
  )
}


export default Home
