import { Link } from "react-router-dom";

import "./Navigation.css";

export const Navigation = () => {
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
          <Link to="/house">lnk.House</Link>
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
            <Link to="/frame">
              <img src="/header/header-frame.png" alt="" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
