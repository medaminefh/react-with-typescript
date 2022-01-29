import { useState } from "react";

const ModalBg = ({ handleClick, children }) => {
  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

const ModalBody = ({ handleClick, children }) => {
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: "#eee",
        maxWidth: "400px",
        height: "300px",
        padding: "20px",
        width: "50%",
      }}
    >
      {children}
    </div>
  );
};

function Modal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <ModalBg handleClick={() => setShow(false)}>
          <ModalBody handleClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>X</button>
            <h5>Hello world!</h5>
          </ModalBody>
        </ModalBg>
      )}
    </>
  );
}

export default Modal;
