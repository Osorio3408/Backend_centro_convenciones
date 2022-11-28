import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-glass">
      <div className="card p-0">
        <img
          src={image.webformatURL}
          alt={image.tags}
          className="card-image-top"
        />

        <div className="card-body px-6 py-4 ">
          <div className="card-title font-bold text-red-600 text-xl mb-2">
            {image.user}
          </div>
          <div className="card-text">
            <ul>
              <li>
                <strong>Views: </strong>
                {image.views}
              </li>
              <li>
                <strong>Downloads: </strong>
                {image.downloads}
              </li>
              <li>
                <strong>Likes: </strong>
                {image.likes}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
