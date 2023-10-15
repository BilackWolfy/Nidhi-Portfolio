import React from "react";
import "./styles.css";

const Header = ({ setModal }) => {
  const openModal = (event) => {
    event.preventDefault();
    setModal(true);
  };
  return (
    <header>
      <nav class="header">
        <ul class="navClass">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/" onClick={openModal}>
              Open modal
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
