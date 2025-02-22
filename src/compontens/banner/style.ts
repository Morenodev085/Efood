import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerBanner = styled.div`
  max-height: 280px;
  width: 100%;
  background-color: ${cores.vermelho};
`

export const InfoBanner = styled.div`
display: flex;
flex-direction: column;
margin-left: 64px;
color: ${cores.branco};
`

export const TituloBanner = styled.h2`
  font-size: 32px;
  margin-top: 180px;
`

export const Categoria = styled.p`
  font-size: 32px;
  font-weight: 100;


`
