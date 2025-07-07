import styled from "styled-components"
import { BotaoCardapio, cores } from "../../styles"

interface VisibleProps{
  isVisible:  boolean;
}

export const CheckoutConteiner = styled.form`
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

&.isOpenCheckout{
  display: flex;
}
`
export const CaixaDosBotoes = styled.div`
  margin-top: 24px;
`

export const TituloEntrega = styled.h3`
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
`
export const AreaPergunta = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 8px;
margin-top: 8px;
font-size: 14px;

input{
height: 32px;
width: 344px;
border: none;
margin-top: 8px;
background-color: ${cores.creme};
}
`


export const AreaPerguntaDupla = styled.div`
display: flex;
font-size: 14px;


Campo{

}
input{
height: 32px;
width: 155px;
border: none;
margin-top: 8px;
background-color: ${cores.creme};
padding: 8px;
}
`

export const Campo = styled.div`
display: flex;
flex-direction: column;
margin: 8px;
`

export const CampoEndereco = styled.div<VisibleProps>`
display: ${(props) => (props.isVisible? 'flex' : 'none')};
flex-direction: column;


`
export const CampoCartao = styled.div<VisibleProps>`
display: ${(props) => (props.isVisible? 'none' : 'flex')};
flex-direction: column;

`