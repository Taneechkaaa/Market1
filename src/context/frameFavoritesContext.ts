import { createContext } from "react";
import { ReproductionCard } from "../components/card/type";

export const FrameContext = createContext<{
  frame: ReproductionCard[];
  addToFrameFavorites: (card: ReproductionCard) => void;
  removeFromFrameFavorites: (id: number) => void;
  removeAllFromFrameFavorites: () => void;
}>({
  frame: [],
  removeFromFrameFavorites: () => {},
  addToFrameFavorites: () => {},
  removeAllFromFrameFavorites: () => {},
});
