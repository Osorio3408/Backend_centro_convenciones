import Navbar_register from "../components/Navbar_register";
import logo from "../public/logo.png";
import Footer_register from "../components/Footer_register";
import axios from "axios";

const Registrar = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/usuarios", {
      nombre_usuario: "yuliam andrey osorio",
      correo_usuario: "yuliamwow@gmail.com",
      tipo_identificacion: "CC",
      numero_identificacion: 1091884362,
      telefono_usuario: "3218604426",
      contraseña_usuario: "12345",
    });
    console.log(res);
  };

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
            />
            <input
              name="correo_usuario"
              type="text"
              className="w-56 h-10 mt-4 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su correo electronico"
            />
            <input
              name="tipo_documento"
              type="text"
              className="w-56 h-10 mb-4 mt-4 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Tipo de documento"
            />
            <input
              name="numero_documento"
              type="text"
              className="w-56 h-10 mb-4  border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese el numero de documento"
            />
            <input
              name="telefono_usuario"
              type="text"
              className="w-56 mb-4  h-10 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su telefono"
            />
            <input
              name="contraseña"
              type="text"
              className="w-56 mb-4 h-10 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su contraseña"
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
