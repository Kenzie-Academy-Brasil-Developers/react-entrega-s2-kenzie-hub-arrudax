import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { LogoKenzieHub } from "../../atoms/LogoKenzieHub";
import { StyleButton } from "../../atoms/StyleButton";
import { Conteiner } from "./style";
export const Header = ({ setAuthenticated }) => {
  const history = useHistory();

  function logout() {
    localStorage.clear();
    setAuthenticated(false);
    toast.success("Logout realizado com sucesso");
    history.push("/login");
  }
  

  return (
    <Conteiner>
      <LogoKenzieHub />
      <StyleButton
        colorSchema="grey"
        sizeButton="5rem"
        onClick={() => logout()}
      >
        Sair
      </StyleButton>
    </Conteiner>
  );
};
