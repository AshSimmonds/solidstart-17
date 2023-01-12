import { type VoidComponent, Switch, Match } from "solid-js";
import { Title } from "solid-start";
import { trpc } from "~/utils/trpc";
import { createQuery, useQueryClient } from '@adeora/solid-query';
// import { createQuery, useQueryClient } from '@tanstack/solid-query';
import { createSignal, For, Suspense } from 'solid-js';
import { isServer } from 'solid-js/web';

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home: VoidComponent = () => {
  const res = trpc.hello.useQuery(() => ({ name: "from tRPC" }));

  const [postId, setPostId] = createSignal(1);

  const query = createQuery(() => ({
    queryKey: ['posts', postId()],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/' + postId()
      ).then((res) => res.json());
      return [response] as PostData[];
    },
  }));

  return (
    <>
      <main>
      <Title>SolidStart | Solid @tanstack/query v5 | tRPC</Title>
      <h1>SolidStart | Solid @tanstack/query v5 | tRPC</h1>

      <div>
        Iterating on conversations on Twitter here:<br />
        https://twitter.com/aryan__deora/status/1613564289180213249<br />
        <br />
        And on Discord here:<br />
        https://discord.com/channels/722131463138705510/1063020750472237106/1063020750472237106
      </div>

      <hr />

      <div>
        <Switch 
          fallback={
            <h2>
              {JSON.stringify(res.data, null, 2)}
            </h2>
          }
        >
          <Match when={res.isLoading}>
            <h2>tRPC loading...</h2>
          </Match>
        </Switch>
      </div>

      <div>
        <button
          onClick={() => {
            setPostId((id) => (id === 1 ? 1 : id - 1));
          }}
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            setPostId((id) => (id === 100 ? 100 : id + 1));
          }}
        >
          Next Page
        </button>
      </div>
      <Suspense>
        <For each={query.data}>
          {(post) => (
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          )}
        </For>
      </Suspense>
    </main>
    </>
  );
};

export default Home;
