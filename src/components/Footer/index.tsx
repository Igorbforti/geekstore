import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import Newsletter from "./Newsletter";
import { FooterContainer, FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Newsletter />
        <div>
            <h3>GeekStore</h3>
            <p>Sua loja especializada em games, consoles e produtos geek. Qualidade garantida e os melhores preços do mercado.</p>
            <div>
                <FacebookLogoIcon size={36} color="#fff" />
                <InstagramLogoIcon size={36} color="#fff" />
                <TwitterLogoIcon size={36} color="#fff" />
                <YoutubeLogoIcon size={36} color="#fff" />
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
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
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
