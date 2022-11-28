import Head from "next/head";
import { useState } from "react";

const Header = () => {
  let Links = [
    { name: "Iniciar Sesión", href: "/login" },
    { name: "Registrarse", href: "/register" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Inicio</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header>
        <div className="m-0 shadow-md w-full sticky top-0 left-0 bg-sky-900">
          <div className=" md:flex items-center justify-between py-4 md:px-10 px-7">
            <div className="justify-center text-xl  font-semibold cursor-pointer flex items-center">
              <span className="relative right-10 pt-2">
                <img
                  src="/logo.png"
                  alt=""
                  className="w-14 h-14 md:w-24 md:h-24 xl:w-28 xl:h-28"
                />
              </span>
              <p className="text-white relative right-7 md:text-3xl xl:text-3xl">
                Centro de Convenciones
              </p>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className=" text-3xl absolute right-10 top-9 cursor-pointer md:hidden">
              <img
                src={open ? "./close.png" : "./menu.png"}
                width="20px"
                alt="logo_menu"></img>
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-sky-900  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
                open ? "top-20  " : "top-[-490px]"
              }`}>
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                  <a
                    href={link.href}
                    className="text-white hover:text-lime-400 duration-500 md:text-2xl">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
