import styled from "styled-components";
import { cores } from "../../styles";
import apresentacao from '../../assets/apresentacao.png'

export const ContainerBanner = styled.div`
  max-height: 280px;
  width: 100%;
`

export const InfoBanner = styled.div`
display: flex;
flex-direction: column;
color: ${cores.branco};
object-fit: cover;
`

export const TituloBanner = styled.h2`
  font-size: 32px;
  margin-top: 180px;
`

export const Categoria = styled.p`
  font-size: 32px;
  font-weight: 100;


`
