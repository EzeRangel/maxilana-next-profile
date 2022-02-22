import Head from "next/head";

import { Menu } from "../components/ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Perfil de tarjetas</title>
        <meta
          name="description"
          content="Esta app ha sido generada por Nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <div className="container">
          <Menu />
          <section>
            <h1>Bienvenido a esta página en Next!</h1>
          </section>
        </div>
      </main>
    </>
  );
}
