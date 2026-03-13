import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "../../data/productsData";

interface ProductsContextType {
  handleAddToCart: (
    product: Product,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  handleDeleteItem: (
    productId: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  handleDecreaseQuantity: (
    productId: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  cartItems: CartItem[];
}

export interface CartItem extends Product {
  quantity: number;
}

export const ProductContext = createContext({} as ProductsContextType);

interface ProductsContextProviderProps {
  children: ReactNode;
}

export const ProductContextProvider = ({
  children,
}: ProductsContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function handleAddToCart(
    product: Product,
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault();

    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function handleDecreaseQuantity(
    productId: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault();

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  function handleDeleteItem(
    productId: number,
    e: React.MouseEvent<HTMLButtonElement>,
  ) {
    e.preventDefault();

    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  return (
    <ProductContext.Provider
      value={{
        handleAddToCart,
        handleDeleteItem,
        handleDecreaseQuantity,
        cartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
