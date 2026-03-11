import styled from "styled-components";

export const SEOWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e5e7eb;
`;

export const SEOBlockContainer = styled.div`
  padding: 4rem 1.125rem;

  @media (min-width: 768px) {
    width: 1055px;
    margin: 0 auto;
    padding: 4rem 5rem;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.4px;

    margin-bottom: 1rem;
    text-align: center;
    color: #101828;
  }

  > p {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.44px;

    margin-bottom: 3rem;
    text-align: center;
    color: #4a5565;
  }
`;

export const SEOTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.45px;

    margin-bottom: 1rem;
    color: #101828;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.31px;

    color: #4a5565;
  }
`;

export const SEOInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  grid-auto-flow: row;
  grid-template-areas:
    ". ."
    ". .";
  justify-items: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.31px;

    text-align: center;
    color: #4a5565;

    &:first-of-type {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.07px;

      color: #09235c;
    }
  }
`;

export const SEOBenefitsContainer = styled.div`
  border-radius: 10px;
  padding: 1.5rem;

  background-color: #f9fafb;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.45px;

    text-align: center;
    color: #101828;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: 999px;
      margin-bottom: 0.75rem;

      font-size: 1rem;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.31px;

      color: #fff;
      background-color: #09235c;
    }

    h4 {
      font-size: 1rem;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.31px;

      margin-bottom: 0.531rem;
      text-align: center;
      color: #101828;
    }

    p {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.15px;

      text-align: center;
      color: #4a5565;
    }
  }
`;
