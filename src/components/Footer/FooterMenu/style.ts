import styled from "styled-components";

interface MenuProps {
  isMenuOpen: boolean;
}

export const FooterMenuContainer = styled.nav`
  width: 100%;

  button {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 0;
    border: none;
    width: inherit;

    color: #fff;
    background-color: #09235c;

    @media (min-width: 768px) {
      padding: 0 0 1.531rem;

      span {
        opacity: 0;
      }
    }
  }
`;

export const MenuContent = styled.div<MenuProps>`
  @media (max-width: 768px) {
    transition: all 0.4s ease-in-out;
    ${({ isMenuOpen }) =>
      isMenuOpen
        ? `
        max-height: 24rem;
        opacity: 1;
        padding-bottom: 1rem;
      `
        : `
        max-height: 0;
        opacity: 0;
        overflow: hidden;
      `}
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li,
    a {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;

      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.31px;
      text-decoration: none;
      list-style: none;
      color: #ffffffcc;

      svg {
        min-width: 20px;
        min-height: 20px;
      }

      h5 {
        font-size: 1rem;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: -0.31px;
        color: #fff;

        @media (min-width: 768px) {
          margin-top: 1.5rem;
        }
      }

      p {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.15px;
        color: #ffffffcc;
      }
    }
  }
`;
