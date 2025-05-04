import Head from "next/head";
import COMMUSLandingPage from "../components/COMMUSLandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>COMMUS – Smart SDLC Coordination Platform</title>
        <meta name="description" content="COMMUS Landing Page" />
      </Head>
      <COMMUSLandingPage />
    </>
  );
}
