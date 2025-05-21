import styled from "styled-components";
import { cores } from "../../styles";

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  background-color: ${cores.creme} ;
  color: ${cores.vermelho};
  `
export const Centralizador = styled.div`
  display: flex;
  justify-content: space-between; /* ou space-around */
  align-items: center;
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
`

export const TituloH = styled.h1`
  font-size: 36px;
  margin-bottom: 32px;

  `

export const NomeDoRestaurate = styled.h2`
  font-size: 18px;
  margin: 0 auto;
`
export const BotaoDoRestaurate = styled.a`
  font-size: 18px;
  margin: 0 auto;
  border: none;
  color: ${cores.vermelho};
  cursor: pointer;
`
