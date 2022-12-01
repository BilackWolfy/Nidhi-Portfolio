import React from "react";
import "./Modal.css";

const Modal = ({ setModal }) => {
  return (
    <div class="mainModal">
      <header class="headingDiv">
        <label for="heading">{"Heading"}</label>
      </header>
      <div class="contentDiv">
        <label for="heading">{"Content"}</label>
      </div>
      <div class="bottomDiv">
        <button onClick={() => setModal(false)}> Close</button>
      </div>
    </div>
  );
};

export default Modal;
