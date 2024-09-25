import { Card } from "../../components/card/Card";
import { ReproductionCard } from "../../components/card/type";
import "./reproduction.css";

const REPRODUCTIONS: ReproductionCard[] = [
  {
    id: 1,
    author: "Марсель Руссо",
    description: "Холст, масло (50х80)",
    imgSrc: "./reproduction/reproduction-1.png",
    name: "Охота Амура",
    price: 14500,
  },
  {
    id: 2,
    author: "Анри Селин",
    description: "Акрил, бумага (50х80)",
    imgSrc: "./reproduction/reproduction-2.png",
    name: "Дама с собачкой",
    price: 16500,
  },
  {
    id: 3,
    author: "Франсуа Дюпон",
    description: "Цветная литография (40х60)",
    imgSrc: "./reproduction/reproduction-3.png",
    name: "Процедура",
    price: 20000,
  },
  {
    id: 4,
    author: "Луи Детуш",
    description: "Бумага, акрил (50х80)",
    imgSrc: "./reproduction/reproduction-4.png",
    name: "Роза",
    price: 12000,
  },
  {
    id: 5,
    author: "Франсуа Дюпон",
    description: "Цветная литография (40х60)",
    imgSrc: "./reproduction/reproduction-5.png",
    name: "Птичья трапеза",
    price: 22500,
  },
  {
    id: 6,
    author: "Пьер Моранж",
    description: "Цветная литография (40х60)",
    imgSrc: "./reproduction/reproduction-6.png",
    name: "Пейзаж с рыбой",
    price: 20000,
  },
];

export const Reproduction = () => {
  return (
    <div className="reproduction-content">
      <h2 className="reproduction-header">Репродукции</h2>
      <div className="reproduction-card-content">
        {REPRODUCTIONS.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};
