import Image from "next/image";
import React from "react";

const AddImage = () => {
  return (
    <div className="flex flex-col items-center text-white justify-center text-center text-4xl h-96">
      <Image
        src="/add_event.png"
        width="220"
        height="100"
        alt="imagen_agregar"
      />
      <span>Todavia no hay eventos registrados!</span>
    </div>
  );
};

export default AddImage;
