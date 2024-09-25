import "./House.css";

export const House = () => {
  return (
    <div className="content-container">
      <div className="content">
        <img className="house-pic" src="./header/header-pic.png" alt="" />
      </div>
      <div>
        <h1 className="house-header">
          Реплики картин от <span className="house-header">Ink. House</span>
        </h1>
        <p className="house-text">
          Высокое качество отрисовки на плотной бумаге или льняном холсте.
          Редкие произведения, доступные цены.
        </p>
        <button className="house-btn">Продукция</button>
      </div>
    </div>
  );
};
