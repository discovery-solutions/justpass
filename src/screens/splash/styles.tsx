import styled from "styled-components/native";

export const logo = require("../../assets/logo.png");

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #E4E7EB;
  padding: 40px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 50%;
  object-fit: contain;
  margin-bottom: 10px;
`;