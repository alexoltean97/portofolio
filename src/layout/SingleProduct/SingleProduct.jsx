import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import WhiteTshirt from "../../assets/images/white-tshirt.png";
import BlackTshirt from "../../assets/images/black-tshirt.png";
import RedTshirt from "../../assets/images/red-tshirt.png";
import GreenTshirt from "../../assets/images/green-tshirt.png";

const SingleProduct = () => {
  const [hoverText, setHoverText] = useState("White");
  const [imageSource, setImageSource] = useState(WhiteTshirt);

  const productImages = [
    {
      id: 1,
      source: WhiteTshirt,
      alternateText: "white-tshirt",
      colorText: "White",
    },
    { id: 2, source: RedTshirt, alternateText: "red-tshirt", colorText: "red" },
    {
      id: 3,
      source: GreenTshirt,
      alternateText: "green-tshirt",
      colorText: "green",
    },
    {
      id: 4,
      source: BlackTshirt,
      alternateText: "black-tshirt",
      colorText: "black",
    },
  ];

  const onImageHover = (text) => {
    setHoverText(text);
  };

  const imageClickLoader = (source) => {
    setImageSource(source);
  };

  return (
    <React.Fragment>
      <div className="single-product container">
        <h2>Single Product</h2>
        <div className="single-product-row d-flex flex-row">
          <div className="product-image-container">
            <img
              src={imageSource}
              style={{ width: "30rem" }}
              alt="white-tshirt"
            />
          </div>

          <div className="product-filters d-flex flex-column">
            <h2>Plain T-shirt</h2>
            <h3>10$</h3>

            <div className="color-picker d-flex flex-column">
              <span>Color: {hoverText}</span>

              <div className="image-grid d-flex flex-row">
                {productImages.map((image, index) => (
                  <div key={index}>
                    <img
                      onMouseEnter={() => onImageHover(image.colorText)}
                      onClick={() => imageClickLoader(image.source)}
                      src={image.source}
                      style={{ width: "6rem" }}
                      alt={image.alternateText}
                    />
                  </div>
                ))}
              </div>
            </div>
            <span>Select size</span>
            <select className="size-selector">
              <option>XXL</option>
              <option>XL</option>
              <option>L</option>
              <option>M</option>
              <option>S</option>
              <option>XS</option>
              <option>XXS</option>
            </select>

            <div className="buttons-container d-flex flex-row">
              <button className="btn btn-cart">
                Add to cart
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button className="btn btn-liked">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
