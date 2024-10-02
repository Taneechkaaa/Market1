import { ReactNode, useContext, useState } from "react";
import { ReproductionCard } from "../components/card/type";
import { FavoritesContext } from "./favoritesContext";

export const FavoritesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favorites, setFavorites] = useState<ReproductionCard[]>([]);

  const addToFavorites = (card: ReproductionCard) => {
    setFavorites((prev) => [card, ...prev]);
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((card) => card.id !== id));
  };
  const removeAllFromFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        removeFromFavorites,
        addToFavorites,
        removeAllFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoriteContext = () => useContext(FavoritesContext);
