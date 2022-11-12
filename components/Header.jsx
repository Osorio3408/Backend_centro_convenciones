import { useState } from "react";

const Header = () => {
  let Links = [
    { name: "Inicio", href: "/" },
    { name: "Registro", href: "/Register" },
    { name: "Iniciar Sesión", href: "/login" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="m-0 shadow-md w-full sticky top-0 left-0 bg-sky-900">
      <div className=" md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="justify-center text-xl  font-semibold cursor-pointer flex items-center">
          <span className="relative right-10 pt-2">
            <img src="/logo.png" alt="" className=" w-20 h-20" />
          </span>
          <p className="text-white relative right-7">
            {" "}
            Centro de Convenciones{" "}
          </p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className=" text-3xl absolute right-8 top-12 cursor-pointer md:hidden">
          ---
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-sky-900  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-28" : "top-[-490px]"
          }`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.href}
                className="text-white hover:text-lime-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
