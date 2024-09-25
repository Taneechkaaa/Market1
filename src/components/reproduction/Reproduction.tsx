import "./reproduction.css";

export const Reproduction = () => {
  return (
    <div className="reproduction-content">
      <h2 className="reproduction-header">Репродукции</h2>
      <div className="reproduction-card">
        <img
          className="reproduction-pic"
          src="/reproduction/reproduction-1.png"
          alt=""
        />
        <p className="reproduction-author">Марсель Руссо</p>
        <p className="reproduction-name">Охота Амура</p>
        <p className="reproduction-description">Холст, масло (50х80) </p>
        <p className="reproduction-price">14 500 руб</p>
        <button className="reproduction-btn">В корзину</button>
      </div>
    </div>
  );
};
