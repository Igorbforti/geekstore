import Slider from "react-slick";
import banner from "../../assets/geekstore-banner.svg";
import { BannerTextWrapper, BannerWrapper } from "./style";

const Banner = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <BannerWrapper>
      <img src={banner} alt="" />
      <Slider {...settings}>
        <BannerTextWrapper>
          <p>Os Melhores Jogos de 2024</p>
          <p>Novos Lançamentos</p>
          <p>Descubra os títulos mais esperados do ano com até </p>
          <a href="">Ver Ofertas</a>
        </BannerTextWrapper>
        <BannerTextWrapper>
          <p>Os Melhores Jogos de 2024</p>
          <p>Novos Lançamentos</p>
          <p>Descubra os títulos mais esperados do ano com até </p>
          <a href="">Ver Ofertas</a>
        </BannerTextWrapper>
        <BannerTextWrapper>
          <p>Os Melhores Jogos de 2024</p>
          <p>Novos Lançamentos</p>
          <p>Descubra os títulos mais esperados do ano com até </p>
          <a href="">Ver Ofertas</a>
        </BannerTextWrapper>
        <BannerTextWrapper>
          <p>Os Melhores Jogos de 2024</p>
          <p>Novos Lançamentos</p>
          <p>Descubra os títulos mais esperados do ano com até </p>
          <a href="">Ver Ofertas</a>
        </BannerTextWrapper>
      </Slider>
    </BannerWrapper>
  );
};

export default Banner;
