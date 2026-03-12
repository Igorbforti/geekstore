import styled from "styled-components";

export const ProductShowcaseContainer = styled.div`
  margin: 4rem 1rem 0;
  padding: 1.25rem 1rem;
  border-radius: 10px;
  background-color: #fff;

  @media (min-width: 768px) {
    > div {
      width: 1055px;
      margin: 0 auto;
    }
  }
`;

export const ShowCaseTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.4px;

  margin-bottom: 1rem;
  text-align: center;
  color: #101828;
`;
export const ShowCaseDescription = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.44px;

  text-align: center;
  color: #4a5565;
`;

export const ShowCaseButton = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 0.625rem 1.5rem;
  text-align: center;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15px;
  text-decoration: none;

  color: #09235c;
  border-radius: 8px;
  border: 1px solid #09235c;
  background-color: #f8f8f8;
`;
