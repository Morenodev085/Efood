import styled from "styled-components";
import { cores } from "../../styles";
import { BotaoCardapio } from "../CardProduto/styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  `
export const CartConteiner = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end ;
color: ${cores.creme};
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 16px 0px 16px;
`
export const Prices = styled.p`
font-weight: bold;
font-size: 16px;
color: ${cores.creme};
margin-top: 40px;
max-width: 360px;
width: 100%;

${BotaoCardapio} {
  max-width: 100%;
  width: 100%;
}
`


export const CardItem = styled.li`
display: flex;
background-color: ${cores.creme};
color: ${cores.vermelho};
height: 100px;
margin-bottom: 16px;
position: relative;

img{
  height: 80px;
  width: 80px;
  object-fit: cover;
  margin-top: 8px ;
  margin-bottom: 12px;
  margin-left: 8px;
}
h3{
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 16px;
}

span{
  font-size: 14px;
  font-weight: 400;
    margin-left: 8px;
}

`
export const CartLixeira = styled.button`
font-size: 16px;
color: ${cores.vermelho};
position: absolute;
right: 8px;
bottom: 8px;
border: none;
`
