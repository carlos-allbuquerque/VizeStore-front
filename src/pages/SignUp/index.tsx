import * as S from "./style";
import ShoppingImage from "../../assets/shopping_image.svg";
import Logo from "../../assets/logo.svg";
import SignUpForm from "../../components/SignUpForm.ts";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <S.Container>
      <S.Logo src={Logo} alt="VizeStore" />

      <S.Image id="image" src={ShoppingImage} alt="" />

      <S.Title>Cadastro</S.Title>
      <SignUpForm />
      <h3>
        Já possui uma conta?{" "}<span> <Link to="/">Faça login</Link> </span>
      </h3>
    </S.Container>
  );
}
