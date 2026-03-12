import Shelf from "./Shelf";
import {
  ProductShowcaseContainer,
  ShowCaseButton,
  ShowCaseDescription,
  ShowCaseTitle,
} from "./style";

const ProductShowcase = () => {
  return (
    <ProductShowcaseContainer>
      <div>
        <ShowCaseTitle>Produtos em Destaque</ShowCaseTitle>
        <ShowCaseDescription>
          Os melhores jogos e acessórios selecionados especialmente para você
        </ShowCaseDescription>

        <Shelf />

        <ShowCaseButton href="/">Ver Todos os Produtos</ShowCaseButton>
      </div>
    </ProductShowcaseContainer>
  );
};

export default ProductShowcase;
