import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="COMMUS – Development Harmony Platform" />
        <meta property="og:description" content="Clarity and control in collaborative development." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://commus-landing-page.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="COMMUS – Development Harmony Platform" />
        <meta name="twitter:description" content="Clarity and control in collaborative development." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
