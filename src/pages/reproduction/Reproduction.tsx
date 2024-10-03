import { ChangeEvent, useState } from "react";
import { Card } from "../../components/card/Card";
import { FILTER_BUTTONS, ReproductionCard } from "../../components/card/type";
import "./reproduction.css";

const REPRODUCTIONS: ReproductionCard[] = [
  {
    country: "france",
    id: 1,
    author: "Марсель Руссо",
    description: "Холст, масло (50х80)",
    imgSrc: "./reproduction/france/reproduction-1.png",
    name: "Охота Амура",
    price: 14500,
  },
  {
    country: "france",
    id: 2,
    author: "Анри Селин",
    description: "Акрил, бумага (50х80)",
    imgSrc: "./reproduction/france/reproduction-2.png",
    name: "Дама с собачкой",
    price: 16500,
  },
  {
    country: "france",
    id: 3,
    author: "Франсуа Дюпон",
    description: "Цветная литография (40х60)",
    imgSrc: "./reproduction/france/reproduction-3.png",
    name: "Процедура",
    price: 20000,
  },
  {
    country: "france",
    id: 4,
    author: "Луи Детуш",
    description: "Бумага, акрил (50х80)",
    imgSrc: "./reproduction/france/reproduction-4.png",
    name: "Роза",
    price: 12000,
  },
  {
    country: "france",
    id: 5,
    author: "Франсуа Дюпон",
    description: "Цветная литография (40х60)",
    imgSrc: "./reproduction/france/reproduction-5.png",
    name: "Птичья трапеза",
    price: 22500,
  },
  {
    country: "france",
    id: 6,
    author: "Пьер Моранж",
    description: "Цветная литография (40х60)",
    imgSrc: "./reproduction/france/reproduction-6.png",
    name: "Пейзаж с рыбой",
    price: 20000,
  },

  {
    country: "germany",
    id: 7,
    author: "Курт Вернер",
    description: "Цветная литография (40х60) ",
    imgSrc: "./reproduction/germany/reproduction-7.png",
    name: "Над городом",
    price: 16000,
  },
  {
    country: "germany",
    id: 8,
    author: "Макс Рихтер",
    description: "Холст, масло (50х80) ",
    imgSrc: "./reproduction/germany/reproduction-8.png",
    name: "Птенцы",
    price: 14500,
  },
  {
    country: "germany",
    id: 9,
    author: "Мартин Майер",
    description: "Цветная литография (40х60)",
    imgSrc: "./reproduction/germany/reproduction-9.png",
    name: "Среди листьев",
    price: 20000,
  },
  {
    country: "germany",
    id: 10,
    author: "Герман Беккер",
    description: "Цветная литография (40х60) ",
    imgSrc: "./reproduction/germany/reproduction-10.png",
    name: "Яркая птица",
    price: 13000,
  },
  {
    country: "germany",
    id: 11,
    author: "Вульф Бауэр",
    description: "Бумага, акрил (50х80)",
    imgSrc: "./reproduction/germany/reproduction-11.png",
    name: "Дятлы",
    price: 20000,
  },
  {
    country: "germany",
    id: 12,
    author: "Вальтер Хартманн",
    description: "Бумага, акрил (50х80)",
    imgSrc: "./reproduction/germany/reproduction-12.png",
    name: "Большие воды",
    price: 23000,
  },

  {
    country: "england",
    id: 13,
    author: "Пол Смит",
    description: "Акварель, бумага (50х80)",
    imgSrc: "./reproduction/england/reproduction-13.png",
    name: "Дикий зверь",
    price: 19500,
  },
  {
    country: "england",
    id: 14,
    author: "Джон Уайт",
    description: "Цветная литография (40х60)",
    imgSrc: "./reproduction/england/reproduction-14.png",
    name: "Скалистый берег",
    price: 17500,
  },
  {
    country: "england",
    id: 15,
    author: "Джим Уотсон",
    description: "Акварель, бумага (50х80) ",
    imgSrc: "./reproduction/england/reproduction-15.png",
    name: "Река и горы",
    price: 20500,
  },
  {
    country: "england",
    id: 16,
    author: "Юджин Зиллион",
    description: "Цветная литография (40х60)",
    imgSrc: "./reproduction/england/reproduction-16.png",
    name: "Белый попугай",
    price: 15500,
  },
  {
    country: "england",
    id: 17,
    author: "Эрик Гиллман",
    description: "Бумага, акрил (50х80)",
    imgSrc: "./reproduction/england/reproduction-17.png",
    name: "Ночная рыба",
    price: 22500,
  },
  {
    country: "england",
    id: 18,
    author: "Альфред Барр",
    description: "Цветная литография (40х60) ",
    imgSrc: "./reproduction/england/reproduction-18.png",
    name: "Рыжий кот",
    price: 21000,
  },
];

const FILTERBUTTONS: FILTER_BUTTONS[] = [
  {
    label: "France",
    value: "france",
  },
  {
    label: "Germany",
    value: "germany",
  },
  {
    label: "England",
    value: "england",
  },
];
export const Reproduction = () => {
  const [currentCountry, setCurrentCountry] = useState("france");
  const [selectedPrice, setSelectedPrice] = useState("range1");

  function updateFilters(country: string) {
    setCurrentCountry(country);
  }

  function checkActiveClass(country: string) {
    return currentCountry === country
      ? "reproduction-activeBtn"
      : "reproduction-btn";
  }

  function updatePriceFilter(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedPrice(e.target.value);
  }

  const filteredReproductions = REPRODUCTIONS.filter((card) => {
    const isCountryMatch = card.country === currentCountry;

    let isPriceMatch = false;
    switch (selectedPrice) {
      case "range1":
        isPriceMatch = card.price > 0;
        break;
      case "range2":
        isPriceMatch = card.price < 15000;
        break;
      case "range3":
        isPriceMatch = card.price >= 15000 && card.price <= 20000;
        break;
      case "range4":
        isPriceMatch = card.price > 20000;
        break;
    }

    return isCountryMatch && isPriceMatch;
  });

  return (
    <div className="reproduction-content">
      <div className="reproduction-head">
        <h2 className="reproduction-header">Репродукции</h2>
        <div className="reproductionBtn-container">
          {FILTERBUTTONS.map((btn) => (
            <button
              key={btn.value}
              onClick={() => updateFilters(btn.value)}
              className={checkActiveClass(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="selectedPrice">
          <label>
            Цена:
            <select value={selectedPrice} onChange={updatePriceFilter}>
              <option value="range1">не выбрано</option>
              <option value="range2">до 15000 руб.</option>
              <option value="range3">15000 - 20000 руб.</option>
              <option value="range4">более 20000 руб.</option>
            </select>
          </label>
        </div>
      </div>
      <div className="reproduction-card-content">
        {filteredReproductions.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};
