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

const useMenuData = (menu) => {
  const data = {
    navigation: [
      { title: "Home", icon: faHouse },
      { title: "About", icon: faCircleInfo },
      { title: "Contact", icon: faAddressBook },
      { title: "Cookies", icon: faCookie },
    ],
    asideMenuList: [
      { title: "Dashboard", icon: faHouse },
      { title: "Revenue", icon: faChartSimple },
      { title: "Notifications", icon: faBell },
      { title: "Analytics", icon: faChartPie },
      { title: "Likes", icon: faHeart },
      { title: "Wallets", icon: faWallet },
    ],
  };

  return data[menu] || [];
};

export default useMenuData;
