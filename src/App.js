import React, { useState } from "react";
import "./App.css";
import Header from "./header";
import Modal from "./Modal";

const App = () => {
  const [intialModal, setModal] = useState(false);
  return (
    <>
      <Header setModal={setModal} />
      {intialModal && <Modal setModal={setModal} />}
    </>
  );
};

export default App;
