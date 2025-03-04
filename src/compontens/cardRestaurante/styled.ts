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
  margin-bottom: 8px;
`
export const CartMais = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel{
    display: flex;
  }

  .container{
    max-width: 1024px;
    background-color: ${cores.vermelho};
    color: ${cores.creme};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img{
    margin-bottom: 12px;
    max-height: 280px;
    width: 280px;
    margin-left: 16px;
    margin-right: 16px;
  }
.Infocard{
  margin-top: 24px;
}
p{
  margin-bottom: 8px;
}

.BotaoModal{
width: 360px;
margin-top: 8px;
margin-left: 32px;
margin-bottom: 16px;
  }

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.73);
  }
  `

export const ConponemteMOdal = styled.div`
background-color: ${cores.vermelho};
position: relative;
z-index: 1;
`
