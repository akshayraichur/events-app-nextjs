import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="overlay"></div> {/** This is custom div tag added, not necessarily important to add. */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
/**
 * This is the default structure we should have.
 *
 * We can have other structure, for ex: have asnother div lets say with an id="overlay"
 */
