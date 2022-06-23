import { Conteiner } from "./style.js";

export const Button = ({
  children,
  primarySchema,
  secondarySchema = false,
  disabledSchema = false,
  ...rest
}) => {
    
  return (
    <Conteiner
      primarySchema={primarySchema}
      secondarySchema={secondarySchema}
      disabledSchema={disabledSchema}
      type="button"
      {...rest}
    >
      {children}
    </Conteiner>
  );
};
