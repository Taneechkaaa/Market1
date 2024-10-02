import { CardFrame } from "../../components/card/CardFrame";
import { useFrameContext } from "../../context/FrameContextProvider";

import "./frame.css";

export const Frame = () => {
  const { frame, removeAllFromFrame } = useFrameContext();
  const totalQuantity = frame.reduce((total, card) => total + card.price, 0);
  return (
    <div className="frame-content">
      <button onClick={() => {}} className="frame-btn-favorites">
        Избранные товары
      </button>
      <div className="frame-header-container">
        <h1 className="frame-header">Корзина товаров</h1>
        <button
          onClick={() => removeAllFromFrame()}
          className="frame-btn-delete"
        >
          ☒Очистить
        </button>
      </div>
      <div className="frame-productions">
        {frame.map((card) => (
          <CardFrame key={card.id} reproduction={card} />
        ))}
      </div>
      <div className="frame-result">
        <p>Итого:</p>
        <p>{totalQuantity}</p>
      </div>
    </div>
  );
};
