import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { useState, type ReactNode } from "react";
import { FooterMenuContainer, MenuContent } from "./style";

interface FooterMenuProps {
  title: string;
  children: ReactNode;
}

const FooterMenu = ({ title, children }: FooterMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <FooterMenuContainer>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <h4>{title}</h4>
        <span>
          {isMenuOpen ? (
            <CaretUpIcon size={16} color="#fff" />
          ) : (
            <CaretDownIcon size={16} color="#fff" />
          )}
        </span>
      </button>

      <MenuContent isMenuOpen={isMenuOpen}>{children}</MenuContent>
    </FooterMenuContainer>
  );
};

export default FooterMenu;
