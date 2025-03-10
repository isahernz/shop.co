import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a ShoppingCartProvider");
  }

  return context;
};
