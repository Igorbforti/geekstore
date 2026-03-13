import { CaretDownIcon, XIcon } from "@phosphor-icons/react";
import { MenuBackground, MenuNav } from "./style";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ isMenuOpen, setIsMenuOpen }: Props) => {

  return (
    <>
      {isMenuOpen && <MenuBackground onClick={() => setIsMenuOpen(false)} />}

      <MenuNav
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <button onClick={() => setIsMenuOpen(false)}>
          <XIcon size={24} />
        </button>

        <ul>
          <li>
            <a href="/">
              Jogos
              <CaretDownIcon size={12} color="#364153" />
            </a>
          </li>

          <li>
            <a href="/">
              Consoles
              <CaretDownIcon size={12} color="#364153" />
            </a>
          </li>

          <li>
            <a href="/">
              PC Gaming
            </a>
          </li>
          <li>
            <a href="/">
              Colecionáveis
            </a>
          </li>
          <li>
            <a href="/">
              Ofertas
            </a>
          </li>
        </ul>
      </MenuNav>
    </>
  );
};

export default Menu;
