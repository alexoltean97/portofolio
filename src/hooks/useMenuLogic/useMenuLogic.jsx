import { useState } from "react";

const useMenuLogic = (initialActiveLink) => {
  const [activeLink, setActiveLink] = useState(initialActiveLink);

  const handleLinkClick = (title) => {
    setActiveLink(title);
  };

  return { activeLink, handleLinkClick };
};

export default useMenuLogic;
