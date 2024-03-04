import {
  faHouse,
  faCircleInfo,
  faAddressBook,
  faCookie,
  faChartSimple,
  faBell,
  faChartPie,
  faHeart,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const useMenuData = (menu) => {
  const { t } = useTranslation();
  const data = {
    navigation: [
      { title: t("homeComponentLi"), icon: faHouse },
      { title: t("about"), icon: faCircleInfo },
      { title: t("contact"), icon: faAddressBook },
      { title: t("cookies"), icon: faCookie },
    ],
    asideMenuList: [
      { title: t("dashboard"), icon: faHouse },
      { title: t("revenue"), icon: faChartSimple },
      { title: t("notifications"), icon: faBell },
      { title: t("analytics"), icon: faChartPie },
      { title: t("likes"), icon: faHeart },
      { title: t("wallets"), icon: faWallet },
    ],
  };

  return data[menu] || [];
};

export default useMenuData;
