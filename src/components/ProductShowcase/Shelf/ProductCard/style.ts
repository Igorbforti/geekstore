import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 228px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const CardHeader = styled.div`
  position: relative;
  img {
    min-width: 100%;
    border-radius: 8px 8px 0 0;
  }

  span {
    position: absolute;
    left: 0.75rem;
    top: 0.75rem;
    padding: 0.125rem 0.563rem;

    font-size: 0.75rem;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;

    color: #fff;
    background-color: #fb2c36;
    border-radius: 8px;
    border: 1px solid #00000000;
  }
`;

export const CardBody = styled.div`
  padding: 1rem;

  > :first-child {
    width: fit-content;
    border-radius: 8px;
    border: 1px solid #00000000;
    padding: 0.25rem 0.563rem;
    margin-bottom: 0.688rem;

    font-size: 0.75rem;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;

    color: #09235c;
    background-color: #f5ab00;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.875rem;
    width: 100%;
    border-radius: 8px;
    padding: 0.406rem 3.125rem;
    margin-top: 0.688rem;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.15px;
    text-decoration: none;
    cursor: pointer;

    color: #fff;
    background-color: #09235c;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    height: 50px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.31px;

    text-align: start;
    color: #101828;
  }
`;

export const RatingsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.15px;
    color: #4a5565;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.44px;
    color: #09235c;

    &:last-child {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.15px;
      text-decoration: line-through;
      color: #6a7282;
    }
  }
`;
