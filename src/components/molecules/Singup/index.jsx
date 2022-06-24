import { PasswordInput } from "../../atoms/PasswordInput";
import { SelectInput } from "../../atoms/SelectInput";
import { StyleButton } from "../../atoms/StyleButton";
import { ThemeInput } from "../../atoms/ThemeInput";
import { Conteiner, Content } from "./style.js";

export const Singup = ({ register, errors }) => {
  return (
    <Conteiner>
      <Content>
        <div className="form__title">
          <h1>Crie sua Conta</h1>
          <span>Rapido e grátis, vamos nessa</span>
        </div>

        <div className="form__input">
          <div className="label__input">
            <label>Nome</label>
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <ThemeInput
            register={register}
            name="name"
            placeholder="Digite aqui seu nome"
          />
        </div>

        <div className="form__input">
          <div className="label__input">
            <label>E-mail</label>
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <ThemeInput
            register={register}
            name="email"
            placeholder="Digite aqui seu email"
          />
        </div>

        <div className="form__input">
          <div className="label__input">
            <label>Senha</label>
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <PasswordInput
            modificador="password"
            register={register}
            name="password"
            placeholder="Digite aqui sua senha"
          />
        </div>

        <div className="form__input">
          <div className="label__input">
            <label>Confirme Senha</label>
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>
          <PasswordInput
            modificador="confirmPassword"
            register={register}
            name="confirmPassword"
            placeholder="Digite aqui sua senha"
          />
        </div>

        <div className="form__input">
          <div className="label__input">
            <label>Bio</label>
            {errors.bio && <span>{errors.bio.message}</span>}
          </div>
          <ThemeInput
            register={register}
            name="bio"
            placeholder="Fale sobre você"
          />
        </div>

        <div className="form__input">
          <div className="label__input">
            <label>Contato</label>
            {errors.contact && <span>{errors.contact.message}</span>}
          </div>
          <ThemeInput
            register={register}
            name="contact"
            placeholder="Opção de contato"
          />
        </div>

        <div className="form__input">
          <div className="label__input">
            <label>Modúlo</label>
            {errors.module && <span>{errors.module.message}</span>}
          </div>

          <SelectInput register={register} name="module" />
        </div>

        <div className="form__btn">
          <StyleButton type="submit" colorSchema="secondary">
            Cadastra-se
          </StyleButton>
        </div>
      </Content>
    </Conteiner>
  );
};
