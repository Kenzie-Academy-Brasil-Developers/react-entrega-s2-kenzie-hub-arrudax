import { Conteiner } from "./style.js";

export const StyleButton = ({ children, colorSchema, ...rest }) => {
  return (
    <Conteiner type="button" colorSchema={colorSchema} {...rest}>
      {children}
    </Conteiner>
  );
};
