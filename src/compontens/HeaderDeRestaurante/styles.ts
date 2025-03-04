import styled from "styled-components";
import { cores } from "../../styles";

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%;
  background-color: ${cores.creme} ;
  color: ${cores.vermelho};
`


export const TituloH = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 32px;
  margin: 0 auto;
`
export const NomeDoRestaurate = styled.h2`
  font-size: 18px;
`
