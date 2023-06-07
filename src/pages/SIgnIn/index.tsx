import * as S from "./style";
import ShoppingImage from "../../assets/shopping_image.svg";
import Logo from "../../assets/logo.svg";
import SignInForm from "../../components/SignInForm.ts";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <S.Container>
      <S.Logo src={Logo} alt="VizeStore" />

      <S.Image id="image" src={ShoppingImage} alt="" />

      <S.Title>Entrar</S.Title>
      <SignInForm />
      <h3>
        {"Não possui uma conta? "}
        <span>
          <Link to="/signup">Cadastre-se</Link>{" "}
        </span>
      </h3>
    </S.Container>
  );
}
