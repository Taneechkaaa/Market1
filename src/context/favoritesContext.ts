import { createContext } from "react";
import { ReproductionCard } from "../components/card/type";

export const FavoritesContext = createContext<{
  favorites: ReproductionCard[];
  addToFavorites: (card: ReproductionCard) => void;
  removeFromFavorites: (id: number) => void;
  removeAllFromFavorites: () => void;
}>({
  favorites: [],
  removeFromFavorites: () => {},
  addToFavorites: () => {},
  removeAllFromFavorites: () => {},
});
