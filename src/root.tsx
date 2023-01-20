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
          content="https://user-images.githubusercontent.com/9034041/212753386-0671cc1a-105b-4596-a594-fee270f227e5.jpg"
        />
        <Meta name="twitter:site" content="@nusquamu" />
        <Meta name="twitter:card" content="summary" />
        <Meta name="twitter:title" content="SolidStart Seventeen - a SolidJS playground" />
        <Meta name="twitter:description" content="Just a little zen garden of ideas and tech tests in the little world of SolidStart." />
        <Meta
          property="og:image"
          content="https://user-images.githubusercontent.com/9034041/212753386-0671cc1a-105b-4596-a594-fee270f227e5.jpg"
        />
        <Meta property="og:image:alt" content="SolidStart Seventeen" />
        <Meta property="og:image:width" content="1200" />
        <Meta property="og:image:height" content="600" />
        <Meta property="og:site_name" content="SolidStart Seventeen - a SolidJS playground" />







        {/* <Link rel="preconnect" href="https://api.fonts.coollabs.io" />
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
        /> */}



        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/montserrat-v25-latin-regular.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/orbitron-v25-latin-600.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/orbitron-v25-latin-regular.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/rajdhani-v15-latin-600.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/vt323-v17-latin-regular.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/fira-code-v21-latin-regular.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/share-tech-mono-v15-latin-regular.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/source-code-pro-v22-latin-regular.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/HACKER1984.OTF"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/C64.TTF"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/GAMING286.TTF"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/GAMINGPENTIUM.TTF"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/OCR-A.TTF"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/WELBUTRIN.TTF"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/WWDIGITAL.TTF"
          crossorigin="anonymous"
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
