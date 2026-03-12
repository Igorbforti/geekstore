import styled from "styled-components";

export const ProductWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 1.5rem 0 3.656rem;

  .slick-slide {
    > div {
      > div {
        display: flex !important;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .slick-slider {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-dots {
    position: absolute;
    bottom: -15px;
    display: flex !important;
    justify-content: center;
    width: 100%;
    list-style: none;

    @media (min-width: 768px) {
      bottom: -35px;
    }

    .slick-active {
      button {
        font-size: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #f5ab00;
        border: none;
      }
    }

    li {
      width: 15px;
      height: 20px;
      margin: 0 2px;
      button {
        font-size: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ada3a380;
        border: none;
        &::before {
        }
      }
    }
  }
`;
