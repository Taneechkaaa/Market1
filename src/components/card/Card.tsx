import { ReproductionCard } from "./type";

interface Props {
  data: ReproductionCard;
}
export const Card = (props: Props) => {
  const {
    data: { author, description, imgSrc, name, price },
  } = props;
  return (
    <div className="reproduction-card">
      <img className="reproduction-pic" src={imgSrc} alt={description} />
      <p className="reproduction-author">{author}</p>
      <p className="reproduction-name">{name}</p>
      <p className="reproduction-description">{description}</p>
      <p className="reproduction-price">{price} руб</p>
      <button className="reproduction-btn">В корзину</button>
    </div>
  );
};
