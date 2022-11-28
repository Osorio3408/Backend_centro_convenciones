import Link from "next/link";
import React from "react";

const Footer_register = () => {
  return (
    <>
      <footer className="w-full border-white border-t-2 p-4 fixed bottom-0 text-center bg-sky-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-sky-900 xl:h-24 ">
        <span className="text-sm text-center justify-center items-center text-gray-500 sm:text-center dark:text-teal-100">
          <Link className="hover:underline xl:text-xl " href="/login">
            Iniciar Sesion
          </Link>
        </span>
        <ul className="flex flex-wrap justify-center items-center mt-3 text-sm text-gray-500 dark:text-teal-100 sm:mt-0">
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 xl:text-xl ">
              Privaticas de Privacidad
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 xl:text-xl ">
              Licencia
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline xl:text-xl ">
              Contactanos
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer_register;
