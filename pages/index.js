import Head from "next/head";
import { MdOutlineDarkMode } from "react-icons/md";

import { Menu, CardPlaceholder } from "../components/ui";

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
            <h1 className="App__copy">Mis métodos de pago</h1>
            <p className="App__copy">
              Aquí puedes encontrar todas tus tarjetas guardadas.
            </p>
            <div className="App__card-list">
              <CardPlaceholder />
            </div>
            <footer className="App__footer">
              <p className="App__small">
                <small>
                  🔒 La información de la tarjeta se almacena encriptada,
                  <br />
                  para que ningún tercero pueda acceder a esta información.
                </small>
              </p>
              <span className="App__theme-btn">
                <MdOutlineDarkMode />
              </span>
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}
