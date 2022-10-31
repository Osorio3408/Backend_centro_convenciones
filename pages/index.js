import Navbar_register from "../components/Navbar_register";
import logo from "../public/logo.png";
import Footer_register from "../components/Footer_register";
import axios from "axios";
import { userAgent } from "next/server";
import { useState } from "react";

const Registrar = () => {

  const [user, setUser] = useState({
    nombre_usuario: "",
    correo_usuario: "",
    tipo_identificacion: "",
    numero_identificacion: 0,
    telefono_usuario: "",
    contraseña_usuario: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/usuarios", user);
    console.log(res);
  };

  
  const handleChange = ({target: {name, value}}) => setUser({...user, [name]: value});
  
  

  return (
    <>
      <Navbar_register />
      <div className="">
        <div className="image_header mb-6 mt-4 w-36 mx-auto">
          <img src={logo} alt="" />
        </div>
        <div className="form  w-100 shadow-2xl h-px">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center">
            <input
              name="nombre_usuario"
              type="text"
              className="w-56 h-10 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su nombre completo"
              onChange={handleChange}
            />
            <input
              name="correo_usuario"
              type="email"
              className="w-56 h-10 mt-4 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su correo electronico"
              onChange={handleChange}
            />
            <input
              name="tipo_identificacion"
              type="text"
              className="w-56 h-10 mb-4 mt-4 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Tipo de documento"
              onChange={handleChange}
            />
            <input
              name="numero_identificacion"
              type="text"
              className="w-56 h-10 mb-4  border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese el numero de documento"
              onChange={handleChange}
            />
            <input
              name="telefono_usuario"
              type="text"
              className="w-56 mb-4  h-10 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su telefono"
              onChange={handleChange}
            />
            <input
              name="contraseña_usuario"
              type="password"
              className="w-56 mb-4 h-10 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
            />

            <div className="botones mb-28 ">
              <button className="bg-sky-900 hover:bg-sky-800 text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                Enviar
              </button>
              <button className="bg-sky-900 hover:bg-sky-800 text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                <a href="/">Volver</a>
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer_register />
    </>
  );
};

export default Registrar;
