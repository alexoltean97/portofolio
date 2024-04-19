import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
const Book = () => {
  const { t } = useTranslation();

  return (
    <div>
      <a
        className="btn-gigs btn-fiver"
        href="https://www.fiverr.com/alexoltean?up_rollout=true"
        target="_new"
      >
        <FontAwesomeIcon className="bookmark" icon={faBookmark} />
        {t("bookFiver")}
      </a>
      <a className="btn-gigs btn-email" href="mailto:example@example.com">
        <FontAwesomeIcon className="bookmark" icon={faEnvelope} />
        {t("meeting")}
      </a>
    </div>
  );
};

export default Book;
