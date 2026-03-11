import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #09235c;
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding-bottom: 1.5rem;
  }
`;

export const FooterContainer = styled.div`
  padding: 3rem 1.125rem;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    width: 1055px;
    margin: 0 auto;
  }
`;

export const FooterLogoContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.07px;

    margin-bottom: 1.469rem;
    text-align: center;
    color: #fff;
  }

  > p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.31px;

    margin-bottom: 1.469rem;
    text-align: center;
    color: #ffffffcc;
  }

  @media (min-width: 768px) {
    h3,
    p {
      text-align: start;
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.469rem;

  @media (min-width: 768px) {
    justify-content: flex-start;

    a {
      width: 36px;
      height: 36px;
    }
  }

  svg {
    width: 32px;
    height: 32px;

    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const MenuListContainer = styled.div`
  ul {
  }
`;

export const FooterBottom = styled.div`
  padding: 3rem 1.125rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #ffffff1a;

  @media (min-width: 768px) {
    padding-top: 1.5rem;

    > div {
      width: 1055px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;

      div {
        display: flex;
        flex-direction: row;
        gap: 1.438rem;
      }
    }
  }

  p,
  a {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.15px;

    text-align: center;
    color: #ffffff99;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-decoration: none;
  }
`;
