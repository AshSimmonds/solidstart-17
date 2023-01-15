import { createQuery } from "@adeora/solid-query";
import type { VoidComponent } from "solid-js";
import { createSignal, For, Suspense } from "solid-js";
import { Title } from "solid-start";
import CheckboxShowHide from "~/components/CheckboxShowHide";
import XCOMOperationBriefing from "~/components/XCOMOperationBriefing";
import Layout from "~/layouts/Layout";
import { trpc } from "~/utils/trpc";
import { Button } from "@kobalte/core";

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home: VoidComponent = () => {
  const [postId, setPostId] = createSignal(1);

  const queryInRoute = createQuery(() => ({
    queryKey: ["postsInRoute", postId()],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId()
      ).then((res) => res.json());
      return [response] as PostData[];
    },
    keepPreviousData: true,
  }));

  const queryViaTrpc = trpc.exampleRouter.jsonplaceholder.useQuery(
    () => ({
      id: 101 - postId(),
    }),
    () => ({
      keepPreviousData: true,
    })
  );

  return (
    <Layout hideHeader="" hideFooter="">
      <Title>SolidStart SSR | Solid @tanstack/query v5 test | tRPC</Title>
      <h1>SolidStart SSR | Solid @tanstack/query v5</h1>
      <h2>Testing createQuery(fetch) in route vs tRPC</h2>




      <div class="text-center mx-auto w-2/3 mt-8 mb-8 flex justify-evenly gap-4">
        <Button.Root
          class="btn btn-secondary btn-outline"
          onPress={() => {
            setPostId(1);
          }}
        >
          |◁
        </Button.Root>

        <Button.Root
          class="btn btn-secondary btn-outline"
          onPress={() => {
            setPostId((id) => (id === 1 ? 1 : id - 1));
          }}
        >
          Prev
        </Button.Root>

        <div class="text-3xl mt-4">
          {postId()} / 100
        </div>

        <Button.Root
          class="btn btn-secondary btn-outline"
          onPress={() => {
            setPostId((id) => (id === 100 ? 100 : id + 1));
          }}
        >
          Next
        </Button.Root>

        <Button.Root
          class="btn btn-secondary btn-outline"
          onPress={() => {
            setPostId(100);
          }}
        >
          ▷|
        </Button.Root>
      </div>


      <div class="mx-auto w-full mt-8 flex justify-evenly gap-4">

        <div class=" w-full ">
          <Suspense>
            <For each={queryInRoute.data}>
              {(post) => (
                <XCOMOperationBriefing
                  title="Embedded in route"
                  subtitle={`${post.title}`}
                  summary={`ID: ${post.id} - https://jsonplaceholder.typicode.com/posts/${post.id}`}
                  icon={
                    <img
                      src="https://avatars.githubusercontent.com/u/72518640"
                      class="w-12 mx-2"
                    />
                  }
                >
                  {post.body}
                </XCOMOperationBriefing>
              )}
            </For>
          </Suspense>

          <div class="text-left">
            <CheckboxShowHide showWhat="metadata">
              <pre>{JSON.stringify(queryInRoute, null, 2)}</pre>
            </CheckboxShowHide>
          </div>
        </div>

        <div class=" w-full ">
          <Suspense>
            <For each={queryViaTrpc.data}>
              {(post) => (
                <XCOMOperationBriefing
                  title="via tRPC"
                  subtitle={`${post.title}`}
                  summary={`ID: ${post.id} - https://jsonplaceholder.typicode.com/posts/${post.id}`}
                  class="mt-16"
                  icon={
                    <img
                      src="https://avatars.githubusercontent.com/u/78011399"
                      class="w-12 mx-2"
                    />
                  }
                >
                  {post.body}
                </XCOMOperationBriefing>
              )}
            </For>
          </Suspense>
          <div class="text-left">
            <CheckboxShowHide showWhat="metadata">
              <pre>{JSON.stringify(queryViaTrpc, null, 2)}</pre>
            </CheckboxShowHide>
          </div>
        </div>
      </div>







      <div class="bg-base-100 p-4 mt-12 mb-4">
        <h3 class="mt-0">
          Current problems{" "}
          <a
            href="https://github.com/AshSimmonds/solidstart-17/issues"
            class="btn text-xs btn-sm btn-secondary btn-outline"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
              class="w-6 mr-2"
            />{" "}
            github issues
          </a>
        </h3>

        <CheckboxShowHide showWhat="background details and problems">
          <h4>PR's welcome.</h4>
          <div class="mt-8 text-xl">
            <pre>
              <ul>
                <li><s>several second delay before rendering</s></li>
                <li>
                  <s>getting <code>serverless function has crashed</code> on Vercel
                    occasionally</s>
                </li>
                <li><s>some elements don't render</s></li>
                <li><a href="https://github.com/AshSimmonds/solidstart-17/issues/4" target="_blank"><img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                  class="w-6 float-left mr-2"
                /><s>bunch of</s> some DOM hydration warnings in the dev console</a></li>
                <li>
                  <s>clicking <code>prev</code> and <code>next</code> buttons jumps
                    to top of page</s>
                </li>
                <li><s>harsh page flash on fetching new data</s></li>
                <li><a href="https://github.com/AshSimmonds/solidstart-17/issues/9" target="_blank"><img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                  class="w-6 float-left mr-2"
                /> first <code>next</code> button click does nothing</a></li>
                <li><a href="https://github.com/AshSimmonds/solidstart-17/issues/10" target="_blank"><img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                  class="w-6 float-left mr-2"
                /> doesn't register <code>prev</code> button after a few <code>next</code> clicks</a></li>
                <li><a href="https://github.com/AshSimmonds/solidstart-17/issues/11" target="_blank"><img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                  class="w-6 float-left mr-2"
                /> tRPC doesn't show latest when clicking through fast</a></li>
                <li><s>Reactivity: 'function should be passed to a tracked scope' warning</s></li>
              </ul>
            </pre>
            <h3>Further discussion:</h3>
            Iterating on conversations on Twitter here:
            <div class="mt-1 mb-4">
              <code class="text-xs">
                https://twitter.com/BlueDwarfAsh/status/1613866577971277824
              </code>
            </div>
            And on Discord here:
            <div class="mt-1">
              <code class="text-xs">
                https://discord.com/channels/722131463138705510/1063020750472237106/1063020750472237106
              </code>
            </div>
          </div>
        </CheckboxShowHide>
      </div>

    </Layout>
  );
};

export default Home;
