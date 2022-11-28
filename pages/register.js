import Navbar_register from "../components/Navbar_register";
import logo from "../public/logo.png";
import Footer_register from "../components/Footer_register";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

const Registrar = () => {
  const router = useRouter();

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
    try {
      await axios.post("/api/usuarios", user);
      toast.success("Usuario Creado Exitosamente");
      router.push("/home");
    } catch (error) {
      toast.error(
        "Error, este correo ya está registrado, por favor ingrese uno nuevo!"
      );
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  return (
    <>
      <Navbar_register />
      <div className="xl:flex flex-col xl:m-auto bg-glass xl:w-96 xl:mb-36 xl:mt-10">
        <div className="image_header mb-3 w-28 mx-auto mt-4 bg-white rounded-full">
          <Image src="/new_user.png" alt="user" width="200" height="100"/>
        </div>

        <div className="form  w-100">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center mx-auto xl:w-1/4  xl:h-1/5  ">
            <label
              htmlFor="nombre_usuario"
              className="text-right m-0 xl:w-40 text-white text-lg">
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
              className="text-right m-0 text-white text-lg xl:w-40">
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
              className="text-right m-0 text-white text-lg xl:w-48">
              Tipo de identificación:
            </label>
            <select
              name="tipo_identificacion"
              id="tipo_identificacion"
              onChange={handleChange}
              className="w-64 h-10 mb-4  border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400">
              <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
              <option value="Cedula de Ciudadanía">Cédula de Ciudadanía</option>
              <option value="Cedula de Extranjeria">
                Cédula de Extranjeria
              </option>
            </select>
            <label
              htmlFor="numero_identificacion"
              className="text-right m-0 text-white text-lg xl:w-52">
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
              className="text-right m-0 text-white text-lg xl:w-40">
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
              className="text-right m-0 text-white text-lg xl:w-28">
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

            <div className="flex gap-x-8 mb-28 xl:mb-10">
              <button
                type="submit"
                className=" border-solid border-2 border-white bg-sky-900 hover:bg-sky-800 hover:border-dotted  text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                Enviar
              </button>
              <span className="text-center border-solid border-2 border-white bg-sky-900 hover:bg-sky-800 hover:border-dotted  text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                <Link href="/home" className="w-full p-4">
                  Volver
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>

      <Footer_register />
    </>
  );
};

export default Registrar;
