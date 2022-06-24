import { Conteiner } from "./style.js";
export const ThemeInput = ({ register, name, ...rest }) => {
  return <Conteiner {...register(name)} {...rest} />;
};
