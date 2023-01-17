import { createQuery } from "@adeora/solid-query";
import type { VoidComponent } from "solid-js";
import { createSignal, For, Suspense } from "solid-js";
import { Title } from "solid-start";
import CheckboxShowHide from "~/components/CheckboxShowHide";
import XCOMOperationBriefing from "~/components/XCOMOperationBriefing";
import Layout from "~/layouts/Layout";
import { trpc } from "~/utils/trpc";
import { Button } from "@kobalte/core";
import { TextField } from "@kobalte/core";
import Rewind from 'solid-rewind';

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
          <TextField.Root value={postId().toString()} onValueChange={setPostId}>
            <TextField.Input class="input input-primary w-16" />
          </TextField.Root>
        </div>

        <Button.Root
          class="btn btn-secondary btn-outline"
          onPress={() => {
            setPostId((id) => (id > 99 ? 100 : id + 1));
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
            <Rewind>
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
            </Rewind>
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
        <h3 class="mt-0">About this project </h3>

        <CheckboxShowHide showWhat="details">
          <div class="mt-4 text-sm">
            This is basically just the personal SolidStart playground of Ash
            Simmonds, where I'll be randomly adding more pages of basic example
            implementations of things, some of which might be good reference
            material (eventually) as a baseline for adding to other projects.<br />
            <br />
            I generally make something "just work", note down the things that
            are buggy or could be improved into GitHub issues (and sometimes
            listed below directly), then later on when brain is idle come back
            and sort them out. Appreciate anyone else jumping in to do it their
            way.
          </div>


          <h4 class="mt-4">
            <a
              href="https://github.com/AshSimmonds/solidstart-17/issues"
              class="btn text-xs btn-sm btn-secondary btn-outline mr-4"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                class="w-6 mr-2"
              />{" "}
              github issues
            </a>
            PR's welcome.
          </h4>

          <div class="mt-8 text-xl">
            <pre>
              <ul>
                <li>
                  <a
                    href="https://github.com/AshSimmonds/solidstart-17/issues/4"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                      class="w-6 float-left mr-2"
                    />
                    <s>bunch of</s> some DOM hydration warnings in the dev
                    console
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AshSimmonds/solidstart-17/issues/9"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                      class="w-6 float-left mr-2"
                    />{" "}
                    first <code>next</code> button click does nothing
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AshSimmonds/solidstart-17/issues/10"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                      class="w-6 float-left mr-2"
                    />{" "}
                    doesn't register <code>prev</code> button after a few{" "}
                    <code>next</code> clicks
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AshSimmonds/solidstart-17/issues/11"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                      class="w-6 float-left mr-2"
                    />{" "}
                    tRPC doesn't show latest when clicking through fast
                  </a>
                </li>
              </ul>
            </pre>


            <h3 class="mt-8">Further discussion:</h3>

            <div class="mt-1 mb-4">
              <a
                href="https://twitter.com/BlueDwarfAsh/status/1613866577971277824"
                class="text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3536/3536464.png"
                  class="w-6 float-left mr-2"
                />
                https://twitter.com/BlueDwarfAsh/status/1613866577971277824
              </a>
            </div>
            <div class="mt-1">
              <a
                href="https://discord.com/channels/722131463138705510/1063020750472237106/1063020750472237106"
                class="text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968759.png"
                  class="w-6 float-left mr-2"
                />
                https://discord.com/channels/722131463138705510/1063020750472237106/1063020750472237106
              </a>
            </div>
          </div>
        </CheckboxShowHide>
      </div>

    </Layout >
  );
};

export default Home;
