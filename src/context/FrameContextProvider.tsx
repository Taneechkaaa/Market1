import { ReactNode, useContext, useState } from "react";
import { FrameContext } from "./frameContext";
import { ReproductionCard } from "../components/card/type";

export const FrameContextProvider = ({ children }: { children: ReactNode }) => {
  const [frame, setFrame] = useState<ReproductionCard[]>([]);

  const addToFrame = (card: ReproductionCard) => {
    setFrame((prev) => [card, ...prev]);
  };

  const removeFromFrame = (id: number) => {
    setFrame((prev) => prev.filter((card) => card.id !== id));
  };
  const removeAllFromFrame = () => {
    setFrame([]);
  };

  return (
    <FrameContext.Provider
      value={{ frame, addToFrame, removeFromFrame, removeAllFromFrame }}
    >
      {children}
    </FrameContext.Provider>
  );
};

export const useFrameContext = () => useContext(FrameContext);
