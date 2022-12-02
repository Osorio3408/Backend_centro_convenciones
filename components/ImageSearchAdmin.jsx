import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const ImageSearchAdmin = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [pathImage, setPathImage] = useState("");
  const route = Router;

  const cloud_name = "centroconveciones";

  const resetStates = () => {
    setName("");
    setDescription("");
    setFile("");
  };

  const sendEvent = async (e) => {
    e.preventDefault();

    try {
      let data = {
        name: name,
        description: description,
      };
      const res = await axios.post("/api/eventos", { file, data });
      toast.success("Evento creado exitosamente!");
      route.push("/Adminevents");
    } catch (error) {
      toast.error("Error:", error);
    }
    // try {
    //   let data = {
    //     name: name,
    //     description: description,
    //   };
    //   const upload = await axios.post("/api/eventos", ({ data }, file));
    //   console.log(upload);
    // } catch (error) {
    //   // toast.error(
    //   //   "Error, este correo ya está registrado, por favor ingrese uno nuevo!"
    //   // );
    // }
    console.log("first");
  };

  const onFileChange = async (e) => {
    try {
      const file = e.target.files;
      const data = new FormData();
      data.append("file", file[0]);
      data.append("upload_preset", "Imagenes");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const files = await res.json();
      // console.log(res);
      setFile(files.secure_url);
      console.log(files.secure_url);
    } catch (error) {
      console.log(error);
    }
    // if (e.target.file && e.target.file.length > 0) {
    //   const file = e.target.files[0];
    //   if (file.type.includes("image")) {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function load() {
    //       setPathImage(reader.result);
    //     };
    //     setFile(file);
    //   } else {
    //     console.log("esta no es una imagen");
    //   }
    // }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="max-w-sm rounded overflow-hidden my-8 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-lime-500 py-1">
          <input
            onChange={(e) => setText(e.target.value)}
            className="text-white appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image..."
          />
          <div className="flex flex-row gap-3">
            <button
              className=" flex-shrink-0 bg-lime-500 hover:bg-lime-700 border-lime-500 hover:border-lime-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit">
              Buscar
            </button>
            <button
              className="flex-shrink-0 bg-lime-500 hover:bg-lime-700 border-lime-500 hover:border-lime-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={() => setShowModal(true)}>
              Agregar
            </button>
          </div>
        </div>{" "}
      </form>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Agregar un Nuevo Evento
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form action="" onSubmit={sendEvent}>
                  <div className="relative p-6 flex-auto text-center ">
                    <div className="flex justify-center items-center mb-5">
                      {/* <Image
                        loader={myLoader}
                        src={image}
                        alt="Image"
                        width="150"
                        height="100"
                      /> */}
                    </div>
                    {/* bg-sky-500 hover:bg-sky-900 border-sky-500
                    hover:border-sky-900 */}
                    <input
                      type="file"
                      name="description"
                      id="description"
                      placeholder="file"
                      onChange={onFileChange}
                    />
                    <label htmlFor="name">Nombre del evento:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-5"
                      placeholder="Nombre del evento..."
                    />
                    <label htmlFor="description">Descripcion del evento:</label>
                    <textarea
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-5"
                      id="description"
                      value={description}
                      name="description"
                      onChange={(e) => setDescription(e.target.value)}
                      rows="3"
                      placeholder="Ingrese una descripcion de el evento"></textarea>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}>
                      Cancelar
                    </button>
                    <button
                      className="bg-sky-500 text-white active:bg-sky-800 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={sendEvent}>
                      Guardar Evento
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ImageSearchAdmin;
