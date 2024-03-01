import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

const CookiesModal = () => {
  return (
    <div className="cookie-body">
      <FontAwesomeIcon icon={faCookieBite} />
      <h2>Cookies Consent</h2>
      <p>
        This website use cookeis to ensure you get the best experience on our
        website.
      </p>

        <button className="btn btn-cookie">I understand</button>

    </div>
  );
};

export default CookiesModal;
