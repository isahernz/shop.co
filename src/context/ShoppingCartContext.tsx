import { createContext, useState } from "react";
import { ProductProps } from "../types/product";

interface ShoppinCartContextType {
  totalQuantity: number;
  setTotalQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartItems: ProductProps[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  addToCart: (product: ProductProps) => void;
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
  // Total items in cart
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  // Cart items
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    setTotalQuantity(totalQuantity + 1);

    // Check if product already exists in cart
    // If it isn't, return -1
    const productPositionInCart = cartItems.findIndex(
      (item) => item.id === product.id
    );
    console.log(productPositionInCart);

    if (productPositionInCart !== -1) {
      const newCartItems = structuredClone(cartItems);
      newCartItems[productPositionInCart].quantity += 1;
      console.log(newCartItems);
      return setCartItems(newCartItems);
    }

    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  // const removeFromCart = (product: ProductProps) => {
  //   setCount(count - product.quantity);
  //   setCartItems((prevState) =>
  //     prevState.filter((cartItem) => cartItem.id !== product.id)
  //   );
  // };

  // const clearCart = () => {
  //   setCount(0);
  //   setCartItems([]);
  // };

  // const getQuantityProduct = (id: number) => {
  //   const product = cartItems.find((item) => item.id === id);
  //   return product?.quantity || 0;
  // };

  return (
    <ShoppingCartContext.Provider
      value={{
        totalQuantity,
        setTotalQuantity,
        cartItems,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
