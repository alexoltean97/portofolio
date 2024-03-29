import React from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isOpen, onClose, children, head, mainClass }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal" tabIndex="-1" role="dialog">
      <div className={`modal-dialog ${mainClass}`} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{head}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
