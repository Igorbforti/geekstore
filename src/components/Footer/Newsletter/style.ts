import styled from "styled-components";

export const NewsletterWrapper = styled.div`
  border-bottom: 1px solid #ffffff1a;
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.125rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    width: 1055px;
    margin: 0 auto 3rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.07px;

    text-align: center;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.31px;

    text-align: center;
    margin-bottom: 1.531rem;
    color: #ffffffcc;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    input[type="text"] {
      width: inherit;
      background-color: #fff;
      border: none;
      border-radius: 8px;

      font-size: 0.875rem;
      font-weight: 400;
      line-height: 100%;
      letter-spacing: -0.15px;
      padding: 0.594rem 0.75rem;
      color: #717182;

      @media (min-width: 768px) {
        width: 330px;
      }
    }

    input[type="submit"] {
      border: none;
      border-radius: 8px;
      padding: 0.5rem 1.5rem;
      background-color: #f5ab00;

      font-size: 0.875rem;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.15px;
      color: #09235c;
    }
  }
`;
