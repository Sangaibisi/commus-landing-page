import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <html lang="en" />
		<title>COMMUS • Smart SDLC Coordination Platform</title>
        <meta name="description" content="COMMUS streamlines communication & coordination across large software teams." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://commus.io/" />
        <meta property="og:title" content="COMMUS" />
        <meta property="og:description" content="Platform for zero‑touch coordination in SDLC." />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="COMMUS" />
        <meta name="twitter:description" content="Platform for zero‑touch coordination in SDLC." />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://commus.io/" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">COMMUS Landing Page</h1>
      </main>
    </>
  );
}
