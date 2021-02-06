import React from "react";
import ReactDom from "react-dom";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "89px",
  zIndex: 1000,
  width: "139px"
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000
};

const BUTTON_STYLE = {
  width: "200%",
  cursor: "pointer",
  transform: "translate(75%, -490%)"
};
export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={BUTTON_STYLE}>
          <p onClick={onClose}>X</p>
        </div>

        <form>
          <input type="text" />
          <input type="submit" />
        </form>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
