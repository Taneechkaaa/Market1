import { useContext } from "react";
import { CardFavorites } from "../../components/card/CardFavorites";
import "./favorites.css";
import { FavoritesContext } from "../../context/favoritesContext";

export const Favorites = () => {
  const { favorites, removeAllFromFavorites } = useContext(FavoritesContext);
  return (
    <div className="favorites-content">
      <div className="favorites-header-container">
        <h2>Избранные товары:</h2>
        <button
          onClick={() => removeAllFromFavorites()}
          className="frame-btn-delete"
        >
          ☒Очистить
        </button>
      </div>
      <div className="frame-productions">
        {favorites.map((card) => (
          <CardFavorites key={card.id} reproduction={card} />
        ))}
      </div>
    </div>
  );
};
