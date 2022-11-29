import Head from "next/head";
import React from "react";

const Navbar_login = () => {
  return (
    <>
      <Head>
        <title>Iniciar sesion</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header>
        <nav className="w-100 bg-sky-900 m-0 h-24 xl:h-24">
          <div className="">
            <div className="items-center justify-between text-center">
              <h1 className="text-center text-lg pt-2 text-teal-100 xl:text-xl">
                Centro de Convenciones
              </h1>
              <h2 className="text-center text-lg relative bottom-5 text-lime-400 xl:text-xl">
                Iniciar Sesion
              </h2>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar_login;
