import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useProductImageList from "../../hooks/useProductImageList/useProductImageList";
import useProductImages from "../../hooks/useProductImages/useProductImages";
import SizeSelector from "../../components/portofolio/SizeSelector/SizeSelector";
import ColorPicker from "../../components/portofolio/ColorPicker/ColorPicker";
import { useTranslation } from "react-i18next";

const SingleProduct = () => {
  const { t } = useTranslation();
  const productImages = useProductImageList();

  const { currentImage, hoverText, onImageHover, onImageClick } =
    useProductImages(productImages, productImages[0].source);

  const cartCtx = useContext(CartContext);

  const productBaseId = "p1";
  const productVariationId =
    productImages.find((img) => img.source === currentImage)?.colorText ||
    "Default";
  const uniqueProductId = `${productBaseId}-${productVariationId}`;

  const product = {
    id: uniqueProductId,
    name: ` ${t('plainTshirt')} - ${productVariationId}`,
    price: 10,
    path: currentImage,
    quantity: 1,
  };

  const addProductToCart = () => {
    cartCtx.addItem(product);
  };
  return (
    <React.Fragment>
      <div className="single-product container">
        <h2>{t("singleProduct")}</h2>
        <div className="single-product-row d-flex flex-row">
          <div className="product-image-container">
            <img src={currentImage} style={{ width: "30rem" }} alt="Product" />
          </div>
          <div className="product-filters d-flex flex-column">
            <h2>{product.name}</h2>

            <h3>${product.price}</h3>

            <ColorPicker
              productImages={productImages}
              hoverText={hoverText}
              onImageHover={onImageHover}
              onImageClick={onImageClick}
            />

            <SizeSelector />
            <div className="buttons-container">
              <button
                onClick={addProductToCart}
                className="btn btn-cart shadow-effect"
              >
                <FontAwesomeIcon icon={faCartShopping} />
               {t("addTo")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
