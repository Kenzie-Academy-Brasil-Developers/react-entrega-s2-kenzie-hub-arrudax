import { StyleButton } from "../../atoms/StyleButton";
import { ThemeInput } from "../../atoms/ThemeInput";
import { Conteiner, Content } from "./style.js";

export const Singup = () => {
  return (
    <Conteiner>
      <Content>
        <div className="form__title">
          <h1>Crie sua Conta</h1>
          <span>Rapido e grátis, vamos nessa</span>
        </div>

        <div className="form__input">
          <label className="label__input">Nome</label>
          <ThemeInput placeholder="Digite aqui seu nome" />
        </div>

        <div className="form__input">
          <label className="label__input">Email</label>
          <ThemeInput placeholder="Digite aqui seu email" />
        </div>

        <div className="form__input">
          <label className="label__input">Senha</label>
          <ThemeInput placeholder="Digite aqui sua senha" />
        </div>

        <div className="form__input">
          <label className="label__input">Confirme Senha</label>
          <ThemeInput placeholder="Digite novamente sua senha" />
        </div>

        <div className="form__input">
          <label className="label__input">Bio</label>
          <ThemeInput placeholder="Fale sobre você" />
        </div>

        <div className="form__input">
          <label className="label__input">Contato</label>
          <ThemeInput placeholder="Opção de contato" />
        </div>

        <div className="form__input">
          <label className="label__input">Selecionar módulo</label>
          <ThemeInput placeholder="Primeiro Módulo" />
        </div>

        <div className="form__btn">
          <StyleButton colorSchema="secondary">Cadastra-se</StyleButton>
        </div>
      </Content>
    </Conteiner>
  );
};
