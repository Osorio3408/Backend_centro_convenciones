import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar_Events = () => {
  return (
    <>
      <Head>
        <title>Centro de Convenciones</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header>
        <div className="m-0 shadow-md w-full sticky top-0 left-0 bg-sky-900">
          <div className=" md:flex items-center justify-between py-4 md:px-10 px-7">
            <div className="w-full ml-5 text-xl font-semibold cursor-pointer flex items-center">
              <span className="relative right-10 pt-2">
                
              <Image src="/logo.png" alt="" className=" w-14 h-14" width="1000" height="100"/>
              </span>
              <p className="text-white relative right-7">
                Centro de Convenciones
              </p>
              <span className="p-2 rounded-md sm:relative left-1/2 lg:left-2/3 xl:left-3/4 text-red-600 hover:underline underline-offset-4 decoration-slate-300 ">
                <Link href="/api/logout">Cerrar Sesión</Link>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar_Events;
