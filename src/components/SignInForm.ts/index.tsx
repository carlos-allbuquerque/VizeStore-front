import * as S from "./style";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AccessToken } from "../../types/TokenType";

export default function SignInForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
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
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <S.Button type="submit">Entrar</S.Button>
    </S.Form>
  );

  async function submit(event: any) {
    event.preventDefault();

    const url = "https://carlosalbuquerque-vizestore.herokuapp.com/signin";

    try {
      const { data } = await axios.post(url, user);
      const response: AccessToken = data;
      
      localStorage.setItem("accessToken", response.token);
      navigate("/home");
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
