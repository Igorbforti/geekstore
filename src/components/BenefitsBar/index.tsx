import {
  CreditCardIcon,
  HeadsetIcon,
  ShieldIcon,
  TruckIcon,
} from "@phosphor-icons/react";
import { BenefitsBarContainer, BenefitsWrapper } from "./style";

const BenefitsBar = () => {
  return (
    <BenefitsWrapper>
      <BenefitsBarContainer>
        <section>
          <TruckIcon size={32} color="#09235C" />
          <div>
            <p>Frete Grátis</p>
            <p>Acima de R$ 199</p>
          </div>
        </section>
        <section>
          <CreditCardIcon size={32} color="#09235C" />
          <div>
            <p>12x sem Juros</p>
            <p>No cartão de crédito</p>
          </div>
        </section>
        <section>
          <ShieldIcon size={32} color="#09235C" />
          <div>
            <p>Compra Segura</p>
            <p>SSL e criptografia</p>
          </div>
        </section>
        <section>
          <HeadsetIcon size={32} color="#09235C" />
          <div>
            <p>Atendimento</p>
            <p>Segunda a Sábado</p>
          </div>
        </section>
      </BenefitsBarContainer>
    </BenefitsWrapper>
  );
};

export default BenefitsBar;
