import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="card mx-auto bg-white justify-between overflow-hidden shadow-lg rounded-lg max-w-sm">
      <div className="flex flex-col">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      </div>
      <div className="card-section px-6 py-4 font-bold text-base">
        <h3 className="text-lg mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
