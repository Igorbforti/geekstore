import { TrashIcon, XIcon } from "@phosphor-icons/react";
import {
  MinicartBodyContainer,
  MinicartContent,
  MinicartFooter,
  MinicartHeader,
  MinicartNav,
  MinicartWrapper,
} from "./style";
import { ProductContext, type CartItem } from "../../contexts/ProductContext";
import { useContext } from "react";

interface Props {
  isMinicartOpen: boolean;
  setIsMinicartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Array<CartItem>;
}

const Minicart = ({ isMinicartOpen, setIsMinicartOpen, cartItems }: Props) => {
  const { handleDeleteItem } = useContext(ProductContext);

  return (
    <MinicartNav
      style={{
        transform: isMinicartOpen ? "translateX(0)" : "translateX(200%)",
      }}
    >
      <MinicartHeader>
        <p>Carrinho de compras</p>
        <button onClick={() => setIsMinicartOpen(false)}>
          <XIcon size={24} />
        </button>
      </MinicartHeader>
      <MinicartContent>
        {cartItems.length == 0 ? (
          <span>Seu carrinho está vazio</span>
        ) : (
          <>
            {cartItems.map((item) => (
              <MinicartWrapper key={item.id}>
                <div>
                  <img src={item.image} alt={item.name} />
                </div>
                <MinicartBodyContainer>
                  <p>{item.name}</p>
                  <div>
                    <p>R$ {item.bestPrice}</p>
                    <div>
                      <input type="quantity" value={item.quantity} />
                      <button onClick={(e) => handleDeleteItem(item.id, e)}>
                        <TrashIcon size={20} color="#FB2C36" />
                      </button>
                    </div>
                  </div>
                </MinicartBodyContainer>
              </MinicartWrapper>
            ))}
          </>
        )}
      </MinicartContent>
      <MinicartFooter>
        <p>Total: {}</p>
        <a href="/">Finalizar Compra</a>
      </MinicartFooter>
    </MinicartNav>
  );
};

export default Minicart;
