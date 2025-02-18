import { createGlobalStyle, styled } from "styled-components";


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
  color: ${cores.branco};
}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  color: #4CAF50;
  font-size: 2rem;
`;