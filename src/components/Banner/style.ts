import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 450px;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: transparent;
    object-fit: cover;
  }

  .slick-slider {
    overflow: hidden;
  }

  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    padding: 0;
    z-index: 2;
    font-size: 0;
  }

  .slick-prev {
    left: 10px;

    &::before {
      content: url("/assets/icons/arrow-left.svg");
      display: block;
      width: 16px;
      height: 16px;
      font-size: 20px;
      position: absolute;
      z-index: 999;
    }
  }

  .slick-next {
    right: 10px;

    &::before {
      content: "";
      width: 16px;
      height: 16px;
    }
  }

  .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
  }

  .slick-dots {
    position: absolute;
    bottom: 24px;
    display: flex !important;
    justify-content: center;
    width: 100%;
    list-style: none;

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
        background-color: #ffffff80;
        border: none;
        &::before {
        }
      }
    }
  }
`;

export const BannerTextWrapper = styled.div`
  text-align: center;
  padding: 0 1.25rem;

  @media (min-width: 768px) {
    text-align: start;
    padding: 0 2rem;
  }

  p {
    margin-top: 5px;
  }

  :nth-child(1) {
    font-size: 1rem;
    font-weight: 400;
    color: #f5ab00;
  }

  :nth-child(2) {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffffff;
  }

  :nth-child(3) {
    font-size: 1.25rem;
    font-weight: 400;
    color: #ffffff;
  }

  a {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 8px;

    font-size: 0.875rem;
    font-weight: 500;
    background-color: #f5ab00;
    color: #000;
    text-decoration: none;
  }
`;
