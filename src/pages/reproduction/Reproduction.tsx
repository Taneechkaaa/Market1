import { Card } from "../../components/card/Card";
import { ReproductionCard } from "../../components/card/type";
import "./reproduction.css";

const REPRODUCTIONS: ReproductionCard[] = [
  {
    id: 1,
    author: "dfvdf",
    description: "nvkj",
    imgSrc: "kf",
    name: "hbcks",
    price: 34,
  },
  {
    id: 2,
    author: "dfvdf",
    description: "nvkj",
    imgSrc: "kf",
    name: "hbcks",
    price: 34,
  },
];

export const Reproduction = () => {
  return (
    <div className="reproduction-content">
      <h2 className="reproduction-header">Репродукции</h2>
      {REPRODUCTIONS.map((card) => (
        <Card data={card} key={card.id} />
      ))}
    </div>
  );
};
