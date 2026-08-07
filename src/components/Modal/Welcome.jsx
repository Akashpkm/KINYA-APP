import { useEffect, useState } from "react";
import "./Welcome.css";
import logo from "../kinya.png";

function WelcomeModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      setTimeout(() => setShow(true), 500); // smooth delay
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem("visited", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="wm-overlay">
      <div className="wm-modal-box">

        <button
          className="wm-close fa-solid fa-xmark"
          onClick={closeModal}
        ></button>

        <h1 className="wm-title">Welcome</h1>

        <div className="wm-modal-body">

          <img src={logo} alt="Kinya Logo" className="wm-logo" />

          <h2 className="wm-subtitle">
            KINYA MEDICAL SYSTEMS & SOLUTION
          </h2>

          <p className="wm-desc">
            Delivering trusted medical systems, innovative healthcare solutions,
            and reliable support for better patient care.
          </p>

          <div className="kinya">
            <h4>KEY INNOVATION IN YOUR ACCESS</h4>

            <div className="info">
              <a href="tel:9789041308" className="modal-btn btn-contact"><i className="fas fa-phone"></i> Contact Now</a>
              <a href="mailto:sales@kinya.in"className="modal-btn btn-email"><i className="fas fa-envelope"></i>Email </a><p> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;