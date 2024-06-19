import React from "react";

const Card = ({ stepNumber, imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Image representing the step */}
      <img
        src={imageSrc}
        alt={`Step ${stepNumber}`}
        className="mb-2 w-16 h-16"
      />
      {/* Title of the step */}
      <h2 className="text-lg font-semibold">{title}</h2>
      {/* Description of the step */}
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
