import { ReproductionCard } from "./type";
import { useFrameContext } from "../../context/FrameContextProvider";
import { useFavoriteContext } from "../../context/FavoritesContextProvider";

interface Props {
  data: ReproductionCard;
}
export const Card = (props: Props) => {
  const { data } = props;
  const { author, description, imgSrc, name, price, id } = data;

  const { addToFrame, frame } = useFrameContext();
  const { addToFavorites, favorites } = useFavoriteContext();
  const handleClick = (card: ReproductionCard) => addToFrame(card);
  const handleClickFavorites = (card: ReproductionCard) => addToFavorites(card);
  return (
    <div className="reproduction-card">
      <img className="reproduction-pic" src={imgSrc} alt={description} />
      <p className="reproduction-author">{author}</p>
      <p className="reproduction-name">{name}</p>
      <p className="reproduction-description">{description}</p>
      <p className="reproduction-price">{price} руб</p>
      <div className="reproduction-btn-container">
        {!frame.some((card) => card.id === id) && (
          <button
            onClick={() => handleClick(data)}
            className="reproduction-btn reproduction-btn-frame"
          >
            В корзину
          </button>
        )}
        {!favorites.some((card) => card.id === id) && (
          <button
            onClick={() => handleClickFavorites(data)}
            className="reproduction-btn reproduction-btn-favorites"
          >
            В избранное
          </button>
        )}
      </div>
    </div>
  );
};
