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
