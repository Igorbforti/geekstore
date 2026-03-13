import productImage1 from "../assets/product-image-1.svg";
import productImage2 from "../assets/product-image-2.svg";
import productImage3 from "../assets/product-image-3.svg";
import productImage4 from "../assets/product-image-4.svg";

export interface Product {
  id: number;
  name: string;
  image: string;
  discount: string;
  highlight: string;
  rating: number;
  reviews: number;
  bestPrice: number;
  sellerPrice: number;
}

export const Products: Product[] = [
  {
    id: 1,
    image: productImage1,
    highlight: "Promoção N1",
    name: "TV de tubo para games retro",
    rating: 4,
    reviews: 892,
    discount: "-30%",
    bestPrice: 89.99,
    sellerPrice: 129.99,
  },
  {
    id: 2,
    image: productImage2,
    highlight: "Promoção N1",
    name: "Zeldinha da massa para os nintendistas",
    rating: 4,
    reviews: 892,
    discount: "-15%",
    bestPrice: 89.99,
    sellerPrice: 129.99,
  },
  {
    id: 3,
    image: productImage3,
    highlight: "Promoção N1",
    name: "Controller Wireless DualSense X2u7445547444",
    rating: 4,
    reviews: 892,
    discount: "-20%",
    bestPrice: 89.99,
    sellerPrice: 129.99,
  },
  {
    id: 4,
    image: productImage4,
    highlight: "Promoção N1",
    name: "Gaming Mouse RGB Pro",
    rating: 4,
    reviews: 892,
    discount: "-20%",
    bestPrice: 89.99,
    sellerPrice: 129.99,
  },
  {
    id: 5,
    image: productImage1,
    highlight: "Promoção N1",
    name: "Gaming Mouse RGB Pro 2",
    rating: 4,
    reviews: 892,
    discount: "-20%",
    bestPrice: 89.99,
    sellerPrice: 129.99,
  },
  {
    id: 6,
    image: productImage2,
    highlight: "Promoção N1",
    name: "Controller Wireless DualSense X2u7445547444",
    rating: 5,
    reviews: 1092,
    discount: "-20%",
    bestPrice: 89.99,
    sellerPrice: 129.99,
  },
];
