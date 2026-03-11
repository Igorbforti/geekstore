import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  gap: 0.625rem;
  border-bottom: 1px solid #f3f4f6;

  span {
    font-size: 0.875rem;
    color: #4a5565;

    &:first-child {
      &::after {
        content: "•";
        margin: 0 0.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    width: 1055px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 1.125rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: #4a5565;
`;
