import { Conteiner } from "./style.js";

export const FormLogin = () => {
  return (
    <Conteiner>
      <div>
        <h1>Login</h1>
        <label>Email</label>
        <input placeholder="email" />

        <label>Senha</label>
        <input placeholder="senha" />

        <button>Entrar</button>
        <div>
          <span>Ainda não possui uma conta?</span>
          <button>Cadastre-se</button>
        </div>
      </div>
    </Conteiner>
  );
};
