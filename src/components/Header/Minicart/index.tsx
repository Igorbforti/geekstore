import { MinusIcon, PlusIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import {
  MinicartBaseButton,
  MinicartBodyContainer,
  MinicartContent,
  MinicartFooter,
  MinicartHeader,
  MinicartNav,
  MinicartWrapper,
  QuantityContainer,
} from "./style";
import { ProductContext, type CartItem } from "../../contexts/ProductContext";
import { useContext } from "react";

interface Props {
  isMinicartOpen: boolean;
  setIsMinicartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Array<CartItem>;
}

const Minicart = ({ isMinicartOpen, setIsMinicartOpen, cartItems }: Props) => {
  const { handleAddToCart, handleDeleteItem, handleDecreaseQuantity } =
    useContext(ProductContext);

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
                      <QuantityContainer>
                        <MinicartBaseButton
                          onClick={(e) => handleDecreaseQuantity(item.id, e)}
                        >
                          <MinusIcon size={14} color="364153" />
                        </MinicartBaseButton>
                        <input type="quantity" value={item.quantity} />
                        <MinicartBaseButton
                          onClick={(e) => handleAddToCart(item, e)}
                        >
                          <PlusIcon size={14} color="364153" />
                        </MinicartBaseButton>
                      </QuantityContainer>
                      <MinicartBaseButton
                        onClick={(e) => handleDeleteItem(item.id, e)}
                      >
                        <TrashIcon size={20} color="#FB2C36" />
                      </MinicartBaseButton>
                    </div>
                  </div>
                </MinicartBodyContainer>
              </MinicartWrapper>
            ))}
          </>
        )}
      </MinicartContent>
      <MinicartFooter>
        <button>Finalizar Compra</button>
      </MinicartFooter>
    </MinicartNav>
  );
};

export default Minicart;
