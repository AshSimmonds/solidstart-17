// @refresh reload
import "./root.css";
import { Suspense } from "solid-js";
import {
  // A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { trpc, client, queryClient } from "~/utils/trpc";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart | Solid @tanstack/query v5 | tRPC</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta
          name="twitter:image:src"
          content="https://pbs.twimg.com/profile_images/1487612657255739393/q5KUGVAt_400x400.jpg"
        />
        <Meta name="twitter:site" content="@nusquamu" />
        <Meta name="twitter:card" content="summary" />
        <Meta name="twitter:title" content="SolidStart Seventeen - a SolidJS playground" />
        <Meta name="twitter:description" content="Just a little zen garden of ideas and tech tests in the little world of SolidStart." />
        <Meta
          property="og:image"
          content="https://user-images.githubusercontent.com/9034041/212753386-0671cc1a-105b-4596-a594-fee270f227e5.jpg"
        />
        <Meta property="og:image:alt" content="Ash Spacemonds" />
        <Meta property="og:image:width" content="1200" />
        <Meta property="og:image:height" content="600" />
        <Meta property="og:site_name" content="Ash" />

        <Link rel="preconnect" href="https://api.fonts.coollabs.io" />
        <Link
          href="https://api.fonts.coollabs.io/css2?family=Montserrat&family=Rajdhani:wght@600&family=Orbitron:wght@600&family=VT323&display=swap"
          rel="stylesheet"
        />

        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap"
          rel="stylesheet"
        />

        <Link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/augmented-ui@2/augmented-ui.min.css"
        />
      </Head>
      <Body>
        <trpc.Provider client={client} queryClient={queryClient}>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <FileRoutes />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </trpc.Provider>
        <Scripts />
      </Body>
    </Html>
  );
}
