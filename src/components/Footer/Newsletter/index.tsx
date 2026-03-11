import { NewsletterContainer, NewsletterWrapper } from "./style";

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <NewsletterContainer>
        <h3>Fique por dentro das novidades</h3>
        <p>
          Receba primeiro as ofertas exclusivas, lançamentos e promoções
          especiais
        </p>
        <form action="">
          <input type="text" placeholder="Seu e-mail" />
          <input type="submit" value="Inscrever" />
        </form>
      </NewsletterContainer>
    </NewsletterWrapper>
  );
};

export default Newsletter;
