import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { apiKenzieHub } from "../../../services/api.js";

import { toast } from "react-toastify";

import { Conteiner, Content } from "./style.js";

import { Login } from "../../molecules/Login";
import { LogoKenzieHub } from "../../atoms/LogoKenzieHub";

export const TemplateLogin = ({ setAuthenticated }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo 8 digitos")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Sua senha deve conter letra maiúsculas, minúsculas, caracter especial e numeros"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function loginUser(data) {
    apiKenzieHub
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        setAuthenticated(true);
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

        toast.success("Login com sucesso");
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("E-mail ou senha inválidos"));
  }

  return (
    <Conteiner heightLogin positionLogin="center">
      <div className="position">
        <form onSubmit={handleSubmit(loginUser)}>
          <div className="form__header">
            <LogoKenzieHub />
          </div>

          <Content>
            <Login register={register} errors={errors} />
          </Content>
        </form>
      </div>
    </Conteiner>
  );
};
