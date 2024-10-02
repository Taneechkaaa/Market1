import { useFrameContext } from "../../context/FrameContextProvider";
import { ReproductionCard } from "./type";

interface Props {
  reproduction: ReproductionCard;
}
export const CardFrame = (props: Props) => {
  const { removeFromFrame } = useFrameContext();
  const { reproduction } = props;
  const { author, imgSrc, name, price, id, description } = reproduction;
  return (
    <div className="cardFrame">
      <div className="cardFrame-content">
        <img className="cardFrame-pic" src={imgSrc} alt={description} />
        <p>{name}</p>
        <p>{author}</p>
        <p>{price} руб</p>
      </div>
      <div>
        <button className="cardFrame-btn" onClick={() => removeFromFrame(id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};
