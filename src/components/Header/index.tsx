import { useContext, useState } from "react";
import Topbar from "../Topbar";
import {
  ListIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
import {
  HeaderContainer,
  HeaderMain,
  LinkContainer,
  MainContainer,
  MenuButton,
  SearchBar,
  SearchBarContainer,
  SearchButton,
} from "./style";
import Logo from "../../assets/geekstore-logo.svg";
import Menu from "./Menu";
import { ProductContext } from "../contexts/ProductContext";
import Minicart from "./Minicart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMinicartOpen, setIsMinicartOpen] = useState(false);

  const { cartItems } = useContext(ProductContext);

  console.log("TESTE",cartItems)

  return (
    <HeaderContainer>
      <Topbar />
      {window.innerWidth < 768 ? (
        <HeaderMain>
          <MainContainer>
            <div>
              <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <XIcon size={24} color="#0A0A0A" />
                ) : (
                  <ListIcon size={24} color="#0A0A0A" />
                )}
              </MenuButton>

              <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
            <div>
              <img src={Logo} alt="" />
            </div>
            <LinkContainer>
              <button>
                <UserIcon size={24} color="#0A0A0A" />
              </button>
              <button onClick={() => setIsMinicartOpen(!isMinicartOpen)}>
                <ShoppingCartIcon size={24} color="#0A0A0A" />
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
              </button>

              <Minicart
                isMinicartOpen={isMinicartOpen}
                setIsMinicartOpen={setIsMinicartOpen}
                cartItems={cartItems}
              />
            </LinkContainer>
          </MainContainer>
          <SearchBarContainer>
            <SearchBar placeholder="Buscar jogos, consoles, produtos geek..." />
            <SearchButton>
              <MagnifyingGlassIcon size={24} color="#fff" />
            </SearchButton>
          </SearchBarContainer>
        </HeaderMain>
      ) : (
        <HeaderMain>
          <MainContainer>
            <div>
              <img src={Logo} alt="" />
            </div>
            <SearchBarContainer>
              <SearchBar placeholder="Buscar jogos, consoles, produtos geek..." />
              <SearchButton>
                <MagnifyingGlassIcon size={16} color="#fff" />
              </SearchButton>
            </SearchBarContainer>
            <LinkContainer>
              <button>
                <UserIcon size={24} color="#0A0A0A" />
                Entrar
              </button>
              <button onClick={() => setIsMinicartOpen(!isMinicartOpen)}>
                <ShoppingCartIcon size={24} color="#0A0A0A" />
                Carrinho
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
              </button>

              <Minicart
                isMinicartOpen={isMinicartOpen}
                setIsMinicartOpen={setIsMinicartOpen}
                cartItems={cartItems}
              />
            </LinkContainer>
          </MainContainer>
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </HeaderMain>
      )}
    </HeaderContainer>
  );
};

export default Header;
