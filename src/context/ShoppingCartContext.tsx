import { createContext, useState } from "react";
import { ProductProps } from "../types/product";

interface ShoppinCartContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: ProductProps[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

interface ShoppinCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartContext = createContext<ShoppinCartContextType>(
  {} as ShoppinCartContextType
);

export const ShoppingCartProvider = ({
  children,
}: ShoppinCartProviderProps) => {
  const [count, setCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{ count, setCount, cartItems, setCartItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
