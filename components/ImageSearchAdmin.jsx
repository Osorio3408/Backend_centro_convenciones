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
  const [loading_image, setLoading_image] = useState(false);
  const route = Router;

  const cloud_name = "centroconveciones";

  const myLoader = ({ src }) => {
    return file;
  };

  const sendEvent = async (e) => {
    e.preventDefault();

   if(name == "" || description == "" || file == ""){
    toast.error("Error, ingrese todos los datos necesarios!");
   }else{
    try {
      let data = {
        name: name,
        description: description,
      };
      const res = await axios.post("/api/eventos", { file, data });
      toast.success("Evento creado exitosamente!");
      route.push("/Adminevents");
      setShowModal(false);
      window.location.reload(true);
    } catch (error) {
      toast.error("Error:", error);
    }
   }
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
      setFile(files.secure_url);
      // console.log(files.secure_url);
      // console.log(file);
      setLoading_image(true);
    } catch (error) {
      console.log(error);
    }
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
                <div className="flex text-center items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-center text-4xl">
                    Agregar un Nuevo Evento
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <p className="text-red-600">X</p>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form action="" onSubmit={sendEvent}>
                  <div className="relative p-5 flex-auto text-center ">
                    <div className="flex justify-center items-center mb-1">
                    </div>
                    {loading_image ? (
                      <div className="flex items-center justify-center mb-3">
                        <Image
                          src={file}
                          width="300"
                          height="100"
                          alt="imagen_logo"
                          loader={myLoader}
                          className="text-center flex items-center center"
                        />
                      </div>
                    ) : (
                      <div class="flex items-center justify-center w-full mb-5">
                        <label
                          for="dropzone-file"
                          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              aria-hidden="true"
                              class="w-10 h-10 mb-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span class="font-semibold">
                                Click para subir la imgaen
                              </span>{" "}
                              o arrastrala y sueltala acá
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400 underline">
                              Por favor espere a que la imagen aparezca para
                              guardar!
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            name="description"
                            class="hidden"
                            onChange={onFileChange}
                          />
                        </label>
                      </div>
                    )}
                    <label htmlFor="name">Nombre del evento:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                      placeholder="Nombre del evento..."
                    />
                    <label htmlFor="description" className="relative top-3">
                      Descripcion del evento:
                    </label>
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
                      className="text-white bg-red-700 rounded active:bg-red-600 hover:bg-red-600 font-bold px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setLoading_image(false);
                        setShowModal(false);
                      }}>
                      Cancelar
                    </button>
                    <button
                      className="bg-sky-700 text-white active:bg-sky-600 hover:bg-sky-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
