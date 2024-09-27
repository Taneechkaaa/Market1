import "./newItems.css";

export const NewItems = () => {
  return (
    <div className="newItems-content">
      <div className="newItems-header-container">
        <img
          className="newItems-pic"
          src="./collection/collection-star2.png"
          alt=""
        />
        <h2 className="newItems-header">Новая коллекция французских авторов</h2>
      </div>
      <div className="newItems-text-container">
        <p className="newItems-text">
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к
          новым свершениям, которые, в свою очередь, должны быть заблокированы в
          рамках своих собственных рациональных ограничений.
        </p>
        <p className="newItems-text">
          Принимая во внимание показатели успешности, граница обучения кадров
          предопределяет высокую востребованность направлений прогрессивного
          развития.
        </p>
      </div>
      <button className="newItems-btn">Ознакомиться</button>
    </div>
  );
};
