import styled from "styled-components";

export const BenefitsWrapper = styled.div`
  background-color: #fff;
`;

export const BenefitsBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  overflow: scroll;

  border-bottom: 1px solid #e5e7eb;

  @media (min-width: 768px) {
    overflow: hidden;
    width: 1055px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    gap: 0.75rem;

    div {
      :nth-child(1) {
        font-size: 1rem;
        font-weight: 500;
        color: #101828;
      }

      :nth-child(2) {
        font-size: 0.875rem;
        font-weight: 400;
        color: #4a5565;
      }
    }

    @media (min-width: 768px) {
      min-width: auto;
      gap: 1.5rem;
    }
  }
`;
