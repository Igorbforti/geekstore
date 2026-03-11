import styled from "styled-components";

export const MosaicBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.5rem 1.125rem 4rem;

  @media (min-width: 768px) {
    width: 1055px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;

    flex-direction: row;
    gap: 1.875rem;
  }

  div {
    border-radius: 10px;
    padding-bottom: 1rem;

    @media (min-width: 768px) {
      padding-bottom: 0;
    }
  }
`;

export const MosaicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const MosaicImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
