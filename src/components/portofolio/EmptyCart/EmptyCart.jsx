import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const EmptyCart = () => {
  const { t } = useTranslation();
  return (
    <div className="empty-cart">
        <h2>{t("emptyCart")}</h2>
      <FontAwesomeIcon icon={faFaceSadTear} />
    </div>
  );
};

export default EmptyCart;
