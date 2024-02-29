import WhiteTshirt from "../../assets/images/white-tshirt.png";
import BlackTshirt from "../../assets/images/black-tshirt.png";
import RedTshirt from "../../assets/images/red-tshirt.png";
import GreenTshirt from "../../assets/images/green-tshirt.png";

const useProductImageList = () => {
  const productImages = [
    {
      id: 1,
      source: WhiteTshirt,
      alternateText: "white-tshirt",
      colorText: "White",
    },
    { id: 2, source: RedTshirt, alternateText: "red-tshirt", colorText: "Red" },
    {
      id: 3,
      source: GreenTshirt,
      alternateText: "green-tshirt",
      colorText: "Green",
    },
    {
      id: 4,
      source: BlackTshirt,
      alternateText: "black-tshirt",
      colorText: "Black",
    },
  ];

  return productImages;
};

export default useProductImageList;
