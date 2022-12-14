import Link from "next/link";
import React from "react";

const Footer_login = () => {
  return (
    <>
      <footer className="w-full p-4 fixed bottom-0 text-center bg-sky-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-sky-900  xl:h-24">
        <span className="text-sm text-center justify-center items-center hover:underline text-gray-500 sm:text-center dark:text-teal-100 xl:text-xl ">
          <Link href="#" className="text-white">
            ¿Se te olvidó la contraseña?
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 justify-center text-sm text-gray-500 dark:text-teal-100 sm:mt-0">
          <li>
            <Link
              href="/register"
              className="mr-4 hover:underline md:mr-6 xl:text-xl text-white">
              ¿No tienes cuenta?
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer_login;
