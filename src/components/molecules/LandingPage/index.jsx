import { ImgLandingPage } from "../../atoms/ImgLandingPage";
import { StyleButton } from "../../atoms/StyleButton";

export const LandingPage = () => {
  return (
    <>
      <ImgLandingPage />
      
      <div>
        <StyleButton colorSchema="primary">Logar</StyleButton>
        <StyleButton colorSchema="grey" sizeButton="100%">
          Cadastrar-se
        </StyleButton>
      </div>
    </>
  );
};
