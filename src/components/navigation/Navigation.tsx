import { Link } from "react-router-dom";

import "./Navigation.css";
import { useFrameContext } from "../../context/FrameContextProvider";
import { useState } from "react";
import { ModalWindow } from "../modal/ModalWindow";

export const Navigation = () => {
  const { frame } = useFrameContext();
  const totalQuantity = frame.reduce((total) => total + 1, 0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item navigation-item-house">
          {" "}
          <img
            className="navigation-star"
            src="/header/header-star.png"
            alt=""
          />
          <Link to="/">lnk.House</Link>
        </li>

        <div className="navigation-container">
          <li className="navigation-item">
            {" "}
            <Link to="/reproduction">Рeпродукции</Link>
          </li>
          <li className="navigation-item">
            {" "}
            <Link to="/new">Новинки</Link>
          </li>
          <li className="navigation-item">
            {" "}
            <Link to="/about">О нас</Link>
          </li>
          <li className="navigation-item">
            {" "}
            <Link to="/favorites">Избранное</Link>
          </li>
          <li className="navigation-item">
            {" "}
            <Link to="/frame">
              <div className="navigation-frame">
                <img src="/header/header-frame.png" alt="" />
                <p className="navigation-frame-quantity">{totalQuantity}</p>
              </div>
            </Link>
          </li>
          <li className="navigation-item ">
            {" "}
            <button onClick={openModal} className="navigation-phone-btn">
              <img
                className="phone-call-img"
                src="/header/header-phone.png"
                alt=""
              />
            </button>
          </li>
        </div>
      </ul>
      <ModalWindow isOpen={modalIsOpen} onClose={closeModal} />
    </nav>
  );
};
