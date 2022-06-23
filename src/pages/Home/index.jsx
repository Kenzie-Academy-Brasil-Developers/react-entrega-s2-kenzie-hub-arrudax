import { Conteiner, Content } from "./style.js";
import { Login } from "../../components/organisms/Login/index.jsx";

export const Home = () => {
  return (
    <Conteiner>
      <Content>
        <Login />
      </Content>
    </Conteiner>
  );
};
