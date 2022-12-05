import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
const { URL } = process.env;
function Event({ event }) {
  console.log(event);

  const route = Router;

  const Close = () => {
    route.push("/Adminevents");
  };

  const handleDelete = async (id) => {
    await axios.delete("/api/eventos/" + id);
    toast.success("Eliminado exisotasamente!")
    route.push('/Adminevents')
  };

  const myLoader = ({ src }) => {
    return event.image_event;
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}

            {/*body*/}
            <form action="">
              <div className="relative p-5 flex-auto text-center ">
                <div className="flex justify-center items-center mb-1"></div>
                <Image
                  src={event.image_event}
                  width="500"
                  alt={event.name_event}
                  height="100"
                  loader={myLoader}
                  className="mb-4"
                />
                <label htmlFor="name">Nombre del evento:</label>
                <h2 className="bg-slate-100 mt-2 py-2">{event.name_event}</h2>
                <label htmlFor="description" className="relative top-3">
                  Descripcion del evento:
                </label>
                <h2 className="bg-slate-100 mt-4 py-2">
                  {event.description_event}
                </h2>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-white bg-sky-600 rounded active:bg-sky-700 hover:bg-sky-700 font-bold px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={Close}>
                  Volver
                </button>
                <button
                  className="bg-red-600 text-white active:bg-red-700 hover:bg-red-700 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    handleDelete(event.id_event);
                  }}>
                  Eliminar Evento
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export const getServerSideProps = async ({ query: { id } }) => {
  const { data: event } = await axios.get(`${URL}/api/eventos/${id}`);

  return {
    props: {
      event,
    },
  };
};

export default Event;
