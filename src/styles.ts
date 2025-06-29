import styled, { createGlobalStyle } from "styled-components";


export const cores = {
  branco: '#fff',
  vermelho: '#E66767',
  creme: '#FFEBD9',
  corDeFundo: '#FFF8F2'
};

export const EstiloGlobal = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body{
  background-color: ${cores.corDeFundo};
  color: ${cores.vermelho};
}
`
export const Logo = styled.img`
    margin-top: 34px;
    margin-bottom: 34px;
    align-items: center;
    height: auto;
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 4;
  padding: 32px 16px 0px 16px;
  position: fixed;
  height: 100%;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 3;
  `
export const BotaoCardapio = styled.button`
  width: 90%;
  border: none;
  background-color: ${cores.creme};
  color: ${cores.vermelho};
  display: block;
  width: 304px;
  height: 24px;
  font-weight: bold;
  cursor: pointer;

`
