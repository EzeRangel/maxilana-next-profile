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
          <section className="App">
            <h1 className="App__title">¡Buenos días!</h1>
            <p className="App__copy App__copy--alt">
              Esta es la página de inicio de nuestro proyecto de tarjetas.
              Oprime la opción deseada.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                maxWidth: 320,
              }}
            >
              <a className="button App__button">Ver mis tarjetas</a>
              <a className="button App__button">Agregar tarjeta</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
