import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children, head }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
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
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>


          {/* <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div> */}


        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
