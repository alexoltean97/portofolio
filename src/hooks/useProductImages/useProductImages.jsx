import { useState } from "react";

const useProductImages = (initialImages, initialImage) => {
  const [images, setImages] = useState(initialImages);
  const [currentImage, setCurrentImage] = useState(initialImage);
  const [hoverText, setHoverText] = useState(initialImages[0].colorText);

  const onImageHover = (text) => {
    setHoverText(text);
  };

  const onImageClick = (source) => {
    setCurrentImage(source);
  };

  return {
    images,
    currentImage,
    hoverText,
    onImageHover,
    onImageClick,
  };
};

export default useProductImages;
