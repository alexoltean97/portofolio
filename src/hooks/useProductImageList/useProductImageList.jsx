import WhiteTshirt from "../../assets/images/white-tshirt.png";
import BlackTshirt from "../../assets/images/black-tshirt.png";
import RedTshirt from "../../assets/images/red-tshirt.png";
import GreenTshirt from "../../assets/images/green-tshirt.png";
import { useTranslation } from "react-i18next";

const useProductImageList = () => {
  const { t } = useTranslation();

  const productImages = [
    {
      id: 1,
      source: WhiteTshirt,
      alternateText: "white-tshirt",
      colorText: t("white"),
    },
    {
      id: 2,
      source: RedTshirt,
      alternateText: "red-tshirt",
      colorText: t("red"),
    },
    {
      id: 3,
      source: GreenTshirt,
      alternateText: "green-tshirt",
      colorText: t("green"),
    },
    {
      id: 4,
      source: BlackTshirt,
      alternateText: "black-tshirt",
      colorText: t("black"),
    },
  ];

  return productImages;
};

export default useProductImageList;
