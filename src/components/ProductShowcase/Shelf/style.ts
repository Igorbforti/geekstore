import styled from "styled-components";

export const ProductWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 1.5rem 0 3.656rem;

  .splide__slide {
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .splide__pagination {
    position: absolute;
    bottom: -15px;
    display: flex !important;
    justify-content: center;
    width: 100%;
    list-style: none;

    @media (min-width: 768px) {
      bottom: -35px;
    }

    .splide__pagination__page {
      margin: 0 2px;
      font-size: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #ada3a380;
      border: none;
      transform: scale(1);
    }

    .splide__pagination__page.is-active {
      font-size: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #f5ab00;
      border: none;
    }
  }
`;
