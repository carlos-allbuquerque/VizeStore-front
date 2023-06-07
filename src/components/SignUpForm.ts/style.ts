import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 32%;
  width: 80%;
`;

export const Input = styled.input`
  height: 4em;
  border: none;
  border-radius: 7px;
  background-color: #f7f7f7;
  box-sizing: border-box;
  padding: 10px;
  font-size: 18px;
  ::placeholder {
    font-size: 18px;
    color: #cfcfcf;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  border: none;
  height: 4em;
  border-radius: 9px;
  background-color: #190840;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
