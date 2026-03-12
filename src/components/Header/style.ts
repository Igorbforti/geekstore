import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.125rem;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 1055px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const MenuButton = styled.button`
  background-color: inherit;
  border: none;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  a {
    position: relative;

    span {
      position: absolute;
      top: -8px;
      right: -8px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.25rem;
      height: 1.25rem;

      border-radius: 50%;
      background-color: #f5ab00;
      color: #09235c;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0;

      @media (min-width: 768px) {
        top: -12px;
        right: -12px;
      }
    }
  }

  @media (min-width: 768px) {
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.875rem;

      font-size: 0.875rem;
      color: #0a0a0a;
      font-weight: 500;
      text-decoration: none;
    }
  }
`;
export const SearchBarContainer = styled.div`
  display: flex;
  position: relative;
`;

export const SearchBar = styled.input`
  font-size: 0.875rem;
  width: 100%;
  padding: 0.5rem;

  background-color: #f3f3f5;
  color: #717182;
  border: none;
  border-radius: 8px;

  &::placeholder {
    color: #717182;
    padding-left: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 37.5rem;
  }
`;

export const SearchButton = styled.button`
  width: 36px;
  height: 32px;

  position: absolute;
  right: 0.3rem;
  top: 50%;
  transform: translateY(-50%);

  background-color: #09235c;
  border: none;
  border-radius: 8px;

  svg {
    margin-top: 4px;
  }
`;
