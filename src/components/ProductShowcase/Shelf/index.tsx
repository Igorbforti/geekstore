import { Products } from "../../../data/productsData";
import ProductCard from "./ProductCard";
import { ProductWrapper } from "./style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const products = Products;

const Shelf = () => {
  return (
    <ProductWrapper>
      <Splide options={{
        perPage: 4,
        arrows: true,
        pagination: true,
        rewind: true,

        breakpoints: {
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
      }}>
        {products.map((product) => {
          return (
            <SplideSlide key={product.id}>
            <div>
              <ProductCard product={product} />
            </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </ProductWrapper>
  );
};

export default Shelf;
