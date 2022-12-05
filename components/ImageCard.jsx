import Image from "next/image";
import React from "react";

const ImageCard = ({event}) => {
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
          height="300"
          loader={myLoader}
        />

        <div className="card-body px-6 py-4 ">
          <div className="card-text">
            <ul className="flex flex-col items-center">
              <li>
                <h3 className="text-slate-100">{event.name_event}</h3>
              </li>
              <li>
                <h3 className="text-slate-100">{event.description_event}</h3>
              </li>
              <li>
                <h3 className="text-slate-100">{event.createdAt}</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
