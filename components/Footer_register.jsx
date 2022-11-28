import React from "react";

const Footer_register = () => {
  return (
    <>
      <footer className="w-full border-white border-t-2 p-4 fixed bottom-0 text-center bg-sky-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-sky-900 xl:h-24 ">
        <span className="text-sm text-center justify-center items-center text-gray-500 sm:text-center dark:text-teal-100">
          <a className="hover:underline xl:text-xl " href="/login">
            Iniciar Sesion
          </a>
        </span>
        <ul className="flex flex-wrap justify-center items-center mt-3 text-sm text-gray-500 dark:text-teal-100 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 xl:text-xl ">
              Privaticas de Privacidad
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 xl:text-xl ">
              Licencia
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline xl:text-xl ">
              Contactanos
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer_register;
