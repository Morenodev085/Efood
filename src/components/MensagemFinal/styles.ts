import styled from "styled-components";
import { BotaoCardapio, cores } from "../../styles";


export const MessaageConteiner = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: none;
justify-content: flex-end ;
color: ${cores.creme};


${BotaoCardapio} {
  max-width: 100%;
  width: 100%;

}

&.isOpenMessage{
  display: flex;
}
`
export const Text = styled.p`
    font-size: 14px;
`
export const Paragrafo = styled.div`
    width: 344px;
    height: 286px;
`
export const Title = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px ;
`