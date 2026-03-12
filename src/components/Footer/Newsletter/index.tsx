import { Slide, toast, type ToastOptions } from "react-toastify";
import { NewsletterContainer, NewsletterWrapper } from "./style";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const toastProps: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  };

  function handleNewslleterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.length !== 0) {
      setEmail("");
      toast.success(`O email ${email} foi cadastrado`, toastProps);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  return (
    <NewsletterWrapper>
      <NewsletterContainer>
        <h3>Fique por dentro das novidades</h3>
        <p>
          Receba primeiro as ofertas exclusivas, lançamentos e promoções
          especiais
        </p>
        <form action="" onSubmit={handleNewslleterSubmit}>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={handleChange}
          />
          <input type="submit" value="Inscrever" />
        </form>
      </NewsletterContainer>
    </NewsletterWrapper>
  );
};

export default Newsletter;
