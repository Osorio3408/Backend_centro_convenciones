import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "semantic-ui-react";
const Navbareventsadmin = () => {
  return (
    <>
      <Head>
        <title>Centro de Convenciones</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header>
        <div className="m-0 shadow-md w-full sticky top-0 left-0 bg-sky-900">
          <div className="py-4 md:px-10 ">
            <div className="flex items-center w-screem ml-5 font-semibold cursor-pointer text-lg ">
              <span className="relative right-5 pt-2">
                <Image src="/logo.png" alt="" width="55" height="100" />
              </span>
              <p className="text-white  relative top-3 right-1 xl:text-2xl">
                Centro de Convenciones
              </p>
              <span className="p-2 rounded-md  sm:relative left-1/2 lg:left-2/3 xl:left-2/3 text-red-600 hover:underline underline-offset-4 decoration-slate-300 w-6 xl:w-auto">
                <Link href="/api/logout" className="flex left-6 xl:left-36 hover:no-underline bottom-7 ">
                  <span className="invisible xl:visible   text-red-600 relative right-11 hover:no-underline ">
                    Cerrar Sesion
                  </span>
                  <Icon name="log out" size="large" color="red" className="relative top-5 lg:top-0 xl:top-0"/>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbareventsadmin