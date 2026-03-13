import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "../../data/productsData";
import { Slide, toast, type ToastOptions } from "react-toastify";

interface ProductsContextType {
  handleAddToCart: (
    product: Product,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => void;
  handleDeleteItem: (
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

  console.log(cartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const toastProps: ToastOptions = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  };

  function handleAddToCart(
    product: Product,
    event: React.MouseEvent<HTMLAnchorElement>,
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
    toast.success("Produto adicionado ao carrinho!", toastProps);
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
        cartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
