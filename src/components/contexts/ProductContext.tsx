import { createContext, useState, type ReactNode } from "react";
import type { Product } from "../../data/productsData";
import { Slide, toast, type ToastOptions } from "react-toastify";

interface ProductsContextType {
  handleAddToCart: (
    product: Product,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => void;
  cartItems: Product[];
}

export const ProductContext = createContext({} as ProductsContextType);

interface ProductsContextProviderProps {
  children: ReactNode;
}

export const ProductContextProvider = ({
  children,
}: ProductsContextProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

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

    setCartItems((prev) => [...prev, product]);
    toast.success("Produto adicionado ao carrinho!", toastProps);
  }

  return (
    <ProductContext.Provider
      value={{
        handleAddToCart,
        cartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
