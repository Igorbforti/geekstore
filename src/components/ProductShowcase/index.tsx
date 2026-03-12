import Countdown from "../Countdown";
import Shelf from "./Shelf";
import {
  ProductShowcaseContainer,
  ShowCaseButton,
  ShowCaseDescription,
  ShowCaseTitle,
} from "./style";

const ProductShowcase = () => {
  const targetDate = "2026-11-28T23:59:59";

  return (
    <ProductShowcaseContainer>
      <div>
        <ShowCaseTitle>Produtos em Destaque</ShowCaseTitle>
        <ShowCaseDescription>
          Os melhores jogos e acessórios selecionados especialmente para você
        </ShowCaseDescription>
        <Countdown targetDate={targetDate} />
        <Shelf />

        <ShowCaseButton href="/">Ver Todos os Produtos</ShowCaseButton>
      </div>
    </ProductShowcaseContainer>
  );
};

export default ProductShowcase;
