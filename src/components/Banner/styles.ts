import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerBanner = styled.div`
  position: relative;
  max-height: 280px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    position: absolute;
    background-color: #000;
    opacity: 0.56;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  `

export const InfoBanner = styled.div`
display: flex;
flex-direction: column;
color: ${cores.branco};
object-fit: cover;
z-index: 1;
position: relative;
margin-left: 64px;
`

export const TituloBanner = styled.h2`
  font-size: 32px;

  margin-top: 180px;
`

export const Categoria = styled.p`
  font-size: 32px;
  font-weight: 100;



`
