import styled from "styled-components";

export const MinicartNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  height: 100vh;
  padding: 1rem;
  z-index: 999;
  max-width: 1055px;

  transform: translateX(200%);
  transition: 400ms ease-in-out;

  background-color: #fff;

  /* @media (min-width: 768px) {
    position: static;
    width: auto;
    height: auto;

    background: transparent;
    padding: 0;
    box-shadow: none;

    transform: translateX(0) !important;
    display: block;
  } */
`;
export const MinicartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;

  p {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.45px;

    color: #101828;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: transparent;
  }
`;
export const MinicartContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.125rem;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.44px;
    text-align: center;
    color: #4a5565;
  }
`;

export const MinicartFooter = styled.div`
  width: 100%;
  padding: 0 1rem 1rem;
  border-top: 1px solid #e5e7eb;

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.15px;

    margin: 1rem 0;
    color: #364153;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 0.625rem 2rem;
    border-radius: 8px;
    background-color: #f5ab00;

    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.15px;
    text-decoration: none;
    color: #09235c;
  }
`;

export const MinicartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem;
  margin-top: 1rem;

  background-color: #f9fafb;
  border-radius: 8px;

  img {
    border-radius: 8px;
    width: 4rem;
  }
`;

export const MinicartBodyContainer = styled.div`
  width: 100%;
  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.31px;

    color: #101828;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: -0.44px;

      color: #09235c;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;

      input {
        width: 3.125rem;
        border: none;
      }
      button {
        background-color: transparent;
        border: none;
      }
    }
  }
`;
