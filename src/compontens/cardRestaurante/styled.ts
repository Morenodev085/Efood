import styled from "styled-components";
import { cores } from "../../styles";

export const CardDoRestaurante = styled.div`
max-height: 338px;
max-width: 320px;
background-color: ${cores.vermelho};
color: ${cores.branco};

`

export const ImgCardapio = styled.img`
  height: 167px;
  width: 304px;
  margin-bottom: 167px; //ja que a imagam nao carrega de forma nenhuma dei esse espaco apra saner como seria com a imgaem ness espaco
`

export const TitutloCardRestaurante = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 4px;
`
export const DescricaoCardRestaurante = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`

export const BotaoCardapio = styled.button`
  width: 90%;
  margin: 0 auto;
  border: none;
  background-color: ${cores.creme};
  color: ${cores.vermelho};
  display: block;
  margin: 0 auto;
  margin-bottom: 8px;
`
