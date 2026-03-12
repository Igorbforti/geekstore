import { ShoppingCartIcon, StarIcon } from "@phosphor-icons/react";
import type { Product } from "../../../../data/productsData";
import {
  Card,
  CardBody,
  CardHeader,
  CardInfo,
  PriceContainer,
  RatingsContainer,
} from "./style";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
const { handleAddToCart } = useContext(ProductContext);
    
  return (
    <Card>
      <CardHeader>
        <img src={product.image} alt="" />
        <span>{product.discount}</span>
      </CardHeader>
      <CardBody>
        <p>{product.highlight}</p>
        <CardInfo>
          <p>{product.name}</p>
          <RatingsContainer>
            <span>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  size={16}
                  color="#F5AB00"
                  fill={star <= product.rating ? "#F5AB00" : "#F5AB0080"}
                  weight="fill"
                />
              ))}
            </span>
            <span>({product.reviews})</span>
          </RatingsContainer>
          <PriceContainer>
            <span>R${product.bestPrice}</span>
            <span>R${product.sellerPrice}</span>
          </PriceContainer>
        </CardInfo>
        <a onClick={(e) => handleAddToCart(product, e)}>
          <ShoppingCartIcon />
          Adicionar
        </a>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
