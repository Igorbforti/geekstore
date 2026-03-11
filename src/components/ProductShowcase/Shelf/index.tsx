import Slider from "react-slick";
import { Products } from "../../../data/productsData";
import ProductCard from "./ProductCard";
import { ProductWrapper } from "./style";

const products = Products;

const Shelf = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  };

  return (
    <ProductWrapper>
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </Slider>
    </ProductWrapper>
  );
};

export default Shelf;
