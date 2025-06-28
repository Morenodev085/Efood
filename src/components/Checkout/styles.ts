import styled from "styled-components"
import { cores } from "../../styles"

export const CheckoutOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 1;
  `
export const CheckoutConteiner = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end ;
color: ${cores.creme};

&.is-open{
  display: flex;
}
`
export const Sidebarcheckout = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 2;
  padding: 32px 16px 0px 16px;
  position: fixed;
  height: 100%;
  width: 360px;
`
