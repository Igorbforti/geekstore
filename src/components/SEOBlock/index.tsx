import {
  SEOBenefitsContainer,
  SEOBlockContainer,
  SEOInfoContainer,
  SEOTextContainer,
  SEOWrapper,
} from "./style";

const SEOBlock = () => {
  return (
    <SEOWrapper>
      <SEOBlockContainer>
        <h2>GeekStore - Sua Loja de Games e Produtos Geek</h2>
        <p>
          A maior variedade de jogos, consoles e acessórios com os melhores
          preços do Brasil
        </p>
        <SEOTextContainer>
          <div>
            <h3>Os Melhores Jogos e Consoles</h3>
            <p>
              Na GeekStore você encontra os lançamentos mais aguardados para
              PlayStation 5, Xbox Series X/S, Nintendo Switch e PC. Nossa
              seleção inclui desde os blockbusters AAA até indies exclusivos,
              sempre com garantia oficial e os melhores preços.
              <br /> Oferecemos também uma ampla gama de consoles, desde os
              últimos lançamentos até clássicos retro para colecionadores. Todos
              os produtos são originais e acompanham garantia do fabricante.
            </p>
          </div>
          <div>
            <h3>Acessórios e Produtos Geek</h3>
            <p>
              Complete seu setup gamer com nossos acessórios premium: headsets
              com som surround, controles wireless de última geração, teclados
              mecânicos, mouses gamers e muito mais.
              <br /> Tudo para elevar sua experiência de jogo ao próximo nível.
              Para os verdadeiros geeks, temos uma seção especial com
              colecionáveis, action figures, estátuas, livros de arte e
              merchandise oficial dos seus games favoritos. Produtos únicos para
              fãs exigentes.
            </p>
          </div>
        </SEOTextContainer>
        <SEOInfoContainer>
          <div>
            <p>5000+</p>
            <p>Produtos Disponíveis</p>
          </div>
          <div>
            <p>50k+</p>
            <p>Clientes Satisfeitos</p>
          </div>
          <div>
            <p>99%</p>
            <p>Avaliações Positivas</p>
          </div>
          <div>
            <p>24h</p>
            <p>Entrega Expressa</p>
          </div>
        </SEOInfoContainer>
        <SEOBenefitsContainer>
          <h3>Por que escolher a GeekStore?</h3>
          <div>
            <div>
              <span>1</span>
              <h4>Preços Competitivos</h4>
              <p>
                Trabalhamos com margens reduzidas para oferecer sempre os
                melhores preços
              </p>
            </div>
            <div>
              <span>2</span>
              <h4>Entrega Rápida</h4>
              <p>
                Entrega expressa em todo Brasil com frete grátis acima de R$ 199
              </p>
            </div>
            <div>
              <span>3</span>
              <h4>Suporte Especializado</h4>
              <p>
                Nossa equipe é formada por gamers que entendem suas necessidades
              </p>
            </div>
          </div>
        </SEOBenefitsContainer>
      </SEOBlockContainer>
    </SEOWrapper>
  );
};

export default SEOBlock;
