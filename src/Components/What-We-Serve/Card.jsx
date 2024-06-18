import React from "react";

const Card = ({path,alt,title , des}) => {
  return (
    <div>
      <div className="text-center">
        <img
          src={path}
          alt={alt}
          className="w-32 h-32 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">
          {des}
        </p>
      </div>
    </div>
  );
};

export default Card;
