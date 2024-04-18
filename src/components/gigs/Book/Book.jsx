import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Book = () => {
  return (
    <div>
      <a
        className="btn-gigs btn-fiver"
        href="https://www.fiverr.com/alexoltean?up_rollout=true"
        target="_new"
      >
        <FontAwesomeIcon className="bookmark" icon={faBookmark} />
        Book on fiver.
      </a>
      <a className="btn-gigs btn-email" href="mailto:example@example.com">
        <FontAwesomeIcon className="bookmark" icon={faEnvelope} />
        Schedule a metting.
      </a>
    </div>
  );
};

export default Book;
