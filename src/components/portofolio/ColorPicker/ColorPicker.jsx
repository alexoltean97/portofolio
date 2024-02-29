import React from "react";

const ColorPicker = ({
  productImages,
  hoverText,
  onImageHover,
  onImageClick,
}) => {
  return (
    <div className="color-picker d-flex flex-column">
      <span>Color: {hoverText}</span>
      <div className="image-grid d-flex flex-row">
        {productImages.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => onImageHover(image.colorText)}
            onClick={() => onImageClick(image.source)}
          >
            <img
              src={image.source}
              style={{ width: "6rem" }}
              alt={image.alternateText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
