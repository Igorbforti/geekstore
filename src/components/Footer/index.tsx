import {
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import Newsletter from "./Newsletter";
import {
  FooterBottom,
  FooterContainer,
  FooterLogoContainer,
  FooterWrapper,
  SocialMediaContainer,
} from "./style";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <FooterWrapper>
      <Newsletter />
      <FooterContainer>
        <FooterLogoContainer>
          <h3>GeekStore</h3>
          <p>
            Sua loja especializada em games, consoles e produtos geek. Qualidade
            garantida e os melhores preços do mercado.
          </p>
          <SocialMediaContainer>
            <a href="/">
              <FacebookLogoIcon size={16} color="#fff" />
            </a>
            <a href="/">
              <InstagramLogoIcon size={16} color="#fff" />
            </a>
            <a href="/">
              <TwitterLogoIcon size={16} color="#fff" />
            </a>
            <a href="/">
              <YoutubeLogoIcon size={16} color="#fff" />
            </a>
          </SocialMediaContainer>
        </FooterLogoContainer>
        <FooterMenu title="Produtos">
          <ul>
            <li>
              <a href="/">PlayStation 5</a>
            </li>
            <li>
              <a href="/">Xbox Series X/S</a>
            </li>
            <li>
              <a href="/">Nintendo Switch</a>
            </li>
            <li>
              <a href="/">PC Gaming</a>
            </li>
            <li>
              <a href="/">Acessórios</a>
            </li>
            <li>
              <a href="/">Colecionáveis</a>
            </li>
          </ul>
        </FooterMenu>
        <FooterMenu title="Atendimento">
          <ul>
            <li>
              <a href="/">Central de Ajuda</a>
            </li>
            <li>
              <a href="/">Como Comprar</a>
            </li>
            <li>
              <a href="/">Trocas e Devoluções</a>
            </li>
            <li>
              <a href="/">Garantia</a>
            </li>
            <li>
              <a href="/">Frete e Entregas</a>
            </li>
            <li>
              <a href="/">Formas de Pagamento</a>
            </li>
          </ul>
        </FooterMenu>
        <FooterMenu title="Contato">
          <ul>
            <li>
              <a href="/">
                <PhoneIcon size={20} color="#F5AB00" />
                (11) 3000-0000
              </a>
            </li>
            <li>
              <a href="/">
                <EnvelopeSimpleIcon size={20} color="#F5AB00" />
                contato@geekstore.com.br
              </a>
            </li>
            <li>
              <a href="/">
                <MapPinIcon size={20} color="#F5AB00" />
                Rua dos Gamers, 123
                <br /> São Paulo - SP
                <br /> CEP: 01234-567
              </a>
            </li>
            <li>
              <h5>Horário de Atendimento</h5>
            </li>
            <li>
              <span>Segunda a Sexta: 8h às 18h</span>
            </li>
            <li>
              <span>Sábado: 8h às 14h</span>
            </li>
          </ul>
        </FooterMenu>
      </FooterContainer>
      <FooterBottom>
        <div>
          <div>
            <p>© 2024 GeekStore. Todos os direitos reservados.</p>
          </div>
          <div>
            <a href="">Política de Privacidade</a>
            <a href="">Termos de Uso</a>
            <a href="">Cookies</a>
          </div>
        </div>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
