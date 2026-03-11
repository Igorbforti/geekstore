import { CaretDownIcon, XIcon } from "@phosphor-icons/react";
import { MenuBackground, MenuNav } from "./style";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && <MenuBackground onClick={() => setIsMenuOpen(false)} />}

      <MenuNav
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <button onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
          <XIcon size={24} />
        </button>

        <ul>
          <li>
            <a href="/" onClick={handleLinkClick}>
              Jogos
              <CaretDownIcon size={12} color="#364153" />
            </a>
          </li>

          <li>
            <a href="/" onClick={handleLinkClick}>
              Consoles
              <CaretDownIcon size={12} color="#364153" />
            </a>
          </li>

          <li>
            <a href="/" onClick={handleLinkClick}>
              PC Gaming
            </a>
          </li>
          <li>
            <a href="/" onClick={handleLinkClick}>
              Colecionáveis
            </a>
          </li>
          <li>
            <a href="/" onClick={handleLinkClick}>
              Ofertas
            </a>
          </li>
        </ul>
      </MenuNav>
    </>
  );
};

export default Menu;
