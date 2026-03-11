import styled from "styled-components";

export const MenuBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: #00000080;
  z-index: 20;
  transition: opacity 400ms;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 70%;
  height: 100vh;
  padding: 1rem;
  z-index: 999;
  max-width: 1055px;

  transform: translateX(-100%);
  transition: 400ms ease-in-out;

  background-color: #fff;

  @media (min-width: 768px) {
    position: static;
    width: auto;
    height: auto;

    background: transparent;
    padding: 0;
    box-shadow: none;

    transform: translateX(0) !important;
    display: block;
  }

  button {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    border: none;
    background-color: inherit;

    @media (min-width: 768px) {
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    gap: 1.5rem;
    list-style: none;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      margin-top: 0.5rem;
    }

    li {
      &:nth-child(1),
      &:nth-child(2) {
        a {
          padding: 0.5rem 1rem;
          border-radius: 8px;

          font-size: 0.875rem;
          font-weight: 500;
          background-color: #f8f8f8;
        }
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.1rem;

        font-size: 1rem;
        text-decoration: none;
        color: #364153;
      }
    }
  }
`;
