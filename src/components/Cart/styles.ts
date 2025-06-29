import styled from "styled-components";
import { BotaoCardapio, cores } from "../../styles";


export const CartConteiner = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: none;
justify-content: flex-end ;
color: ${cores.creme};

&.is-open{
  display: flex;
}
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
