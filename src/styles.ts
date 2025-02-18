import { createGlobalStyle } from "styled-components";


export const cores = {
  branco: '#fff',
  vermelho: '#E66767',
  creme: '#FFEBD9'
};

export const EstiloGlobal = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body{
  background-color: ${cores.creme};
  color: ${cores.vermelho};
}
`
