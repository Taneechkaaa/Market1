import { useContext } from "react";
import { FavoritesContext } from "../../context/favoritesContext";
import { ReproductionCard } from "./type";
import { FrameContext } from "../../context/frameContext";

interface Props {
  reproduction: ReproductionCard;
}

export const CardFavorites = (props: Props) => {
  const { reproduction } = props;
  const { author, price, name, imgSrc, description, id } = reproduction;
  const { removeFromFavorites } = useContext(FavoritesContext);
  const { addToFrame } = useContext(FrameContext);

  const handleClickAddFavoritesToFrame = (
    reproduction: ReproductionCard,
    id: number
  ) => {
    addToFrame(reproduction);
    removeFromFavorites(id);
  };

  return (
    <div className="cardFrame">
      <div className="cardFrame-content">
        <img className="cardFrame-pic" src={imgSrc} alt={description} />
        <p>{name}</p>
        <p>{author}</p>
        <p>{price} руб</p>
      </div>
      <div>
        <button
          className="cardFrame-btn"
          onClick={() => handleClickAddFavoritesToFrame(reproduction, id)}
        >
          В корзину
        </button>
        <button
          className="cardFrame-btn"
          onClick={() => removeFromFavorites(id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
