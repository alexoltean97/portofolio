import React from "react";
import { createPortal } from "react-dom";

const FormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return <p>test</p>;
};

export default FormModal;
