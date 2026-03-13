import styled from "styled-components";

export const CountdownContainer = styled.div`
  background: linear-gradient(135deg, #0b0b0d 0%, #1a1a2e 100%);
  box-shadow: 0 0 20px #f8e71c33;

  border: 2px solid #f8e71c;
  border-radius: 10px;

  text-align: center;
  padding: 1.25rem;
  margin: 1.25rem 0;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin: 1.25rem 0.938rem;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    font-style: italic;
    margin: 10px 0;

    color: #f8e71c;
    text-shadow: 0 0 15px #f8e71c99;
  }

  h3 {
    font-size: 1.17rem;
    font-weight: 700;
    padding: 0.125rem 0.5rem;
    transform: skewX(-15deg);

    background-color: #f8e71c;
    color: #000;
  }
`;

export const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.938rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  div {
    width: 3.375rem;
  }

  span {
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    color: #f8e71c;
  }

  small {
    font-size: 0.6rem;
    text-transform: uppercase;
    opacity: 0.7;

    color: #f8e71c;
  }
`;
