import * as S from "./style";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <S.Form onSubmit={submit}>
      <S.Input
        id="email"
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <S.Input
        id="password"
        type="password"
        name="password"
        placeholder="Senha"
        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
      />

      <S.Input
        id="confirm-password"
        type="password"
        name="confirm-password"
        placeholder="Confirme a senha"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <S.Button type="submit">Inscrever-se</S.Button>
    </S.Form>
  );

  async function submit(event: any) {
    event.preventDefault();

    const url = "https://carlosalbuquerque-vizestore.herokuapp.com/signup";

    try {
      await axios.post(url, user);
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
