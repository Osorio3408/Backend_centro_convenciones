import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageCardAdmin = ({event}) => {
  
  const myLoader = ({ src }) => {
    return event.image_event;
  };
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-glass">
      <div className="card p-0">
        <Image
          src={event.image_event}
          alt={"Imagen"}
          className="card-image-top"
          width="400"
          height="100"
          loader={myLoader}
        />

        <div className="card-body px-6 py-4 ">
          <div className="card-text">
            <ul className="flex flex-col items-center">
              <li>
                <h3 className="text-slate-100">{event.name_event}</h3>
              </li>
              <li>
                <h3 className="text-slate-100 text-ellipsis overflow-hidden">{event.description_event}</h3>
              </li>
              <li>
                <h3 className="text-slate-100">{event.createdAt}</h3>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-10">

            <button type="button" className="bg-sky-600 text-white mt-3 active:bg-sky-800 active:underline hover:bg-sky-800 hover:underline font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Editar  
            </button>
            <Link href={`/eventos/${event.id_event}`} className="bg-red-600 text-white mt-3 active:bg-red-800 active:underline hover:bg-red-800 hover:underline font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Eliminar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardAdmin;