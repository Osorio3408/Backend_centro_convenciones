import Navbar_register from "../components/Navbar_register";
import logo from "../public/logo.png";
import Footer_register from "../components/Footer_register";
import axios from "axios";
import { userAgent } from "next/server";
import { useState } from "react";

const Registrar = () => {
  const [user, setUser] = useState({
    nombre_usuario: "",
    email_user: "",
    tipo_identificacion: "",
    numero_identificacion: 0,
    telefono_usuario: "",
    contraseña_usuario: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/usuarios", user)
    
    //ESTO ES UNA ALERTA PARA DECIRLE QUE YA HAY UN CORREO
    alert(res.data.message);


    // .then(res => {
    //   console.log("exito");
    //   console.log(res);
    // }).catch(error => {
    //   console.log("error");
    //   console.log(error);
    // })
    
    console.log(res);
  };

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  return (
    <>
      <Navbar_register />
      <div className="image_header mb-3 w-28 mx-auto mt-4">
        <img src="/logo.png" alt="" />
      </div>
      <div className="image_header mb-0 mt-2 w-36 mx-auto">
        <img src={logo} alt="" />
      </div>
      <div className="form  w-100 shadow-2xl h-px">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center mx-auto">
          <label
            htmlFor="nombre_usuario"
            className="text-right m-0 text-white text-lg">
            Nombre de usuario:
          </label>
          <input
            name="nombre_usuario"
            type="text"
            id="nombre_usuario"
            className="w-64 h-10 mb-4 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
            placeholder="Ingrese su nombre completo"
            onChange={handleChange}
          />
          <label
            htmlFor="email_user"
            className="text-right m-0 text-white text-lg">
            Correo electronico:
          </label>
          <input
            name="email_user"
            type="email"
            id="email_user"
            className="w-64 h-10 mb-4 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
            placeholder="Ingrese su correo electronico"
            onChange={handleChange}
          />
          <label
            htmlFor="tipo_identificacion"
            className="text-right m-0 text-white text-lg">
            Tipo de identificación:
          </label>
          <input
            name="tipo_identificacion"
            type="text"
            id="tipo_identificacion"
            className="w-64 h-10 mb-4  border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
            placeholder="Tipo de documento"
            onChange={handleChange}
          />
          <label
            htmlFor="numero_identificacion"
            className="text-right m-0 text-white text-lg">
            Numero de identificación:
          </label>
          <input
            name="numero_identificacion"
            type="text"
            id="numero_identificacion"
            className="w-64 h-10 mb-4  border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
            placeholder="Ingrese el numero de documento"
            onChange={handleChange}
          />
          <label
            htmlFor="telefono_usuario"
            className="text-right m-0 text-white text-lg">
            Numero telefonico:
          </label>
          <input
            name="telefono_usuario"
            type="text"
            id="telefono_usuario"
            className="w-64 mb-4  h-10 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
            placeholder="Ingrese su telefono"
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className="text-right m-0 text-white text-lg">
            Contraseña:
          </label>
          <input
            name="contraseña_usuario"
            type="password"
            id="password"
            className="w-64 mb-2 h-10 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
            placeholder="Ingrese su contraseña"
            onChange={handleChange}
          />

          <div className="flex mx-auto gap-x-8 mb-28">
            <button
              type="submit"
              className="border-solid border-2 border-white bg-sky-900 hover:bg-sky-800 hover:border-dotted  text-teal-200 p-2 rounded-lg w-24 mt-4 ">
              Enviar
            </button>
            <button className="border-solid border-2 border-white bg-sky-900 hover:bg-sky-800 hover:border-dotted  text-teal-200 p-2 rounded-lg w-24 mt-4 ">
              <a href="/Home">Volver</a>
            </button>
          </div>
        </form>
      </div>

      <Footer_register />
    </>
  );
};

export default Registrar;
