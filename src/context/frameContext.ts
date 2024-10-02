import { createContext } from "react";
import { ReproductionCard } from "../components/card/type";

export const FrameContext = createContext<{
  frame: ReproductionCard[];
  addToFrame: (card: ReproductionCard) => void;
  removeFromFrame: (id: number) => void;
  removeAllFromFrame: () => void;
}>({
  frame: [],
  removeFromFrame: () => {},
  addToFrame: () => {},
  removeAllFromFrame: () => {},
});
