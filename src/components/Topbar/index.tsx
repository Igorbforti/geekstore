import { LinkContainer, TopbarContainer } from "./style";

const Topbar = () => {
  return (
    <TopbarContainer>
      <div>
        <span>Frete grátis acima de R$ 199 </span>
        <span>12x sem juros</span>
      </div>

      <LinkContainer>
        <div>
          <a href="/" />
          Minha Conta
        </div>
        <div>
          <a href="/" />
          Atendimento
        </div>
      </LinkContainer>
    </TopbarContainer>
  );
};

export default Topbar;
