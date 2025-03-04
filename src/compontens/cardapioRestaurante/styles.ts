import styled from "styled-components";

export const ListaRestaurante = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Cria colunas responsivas
  grid-gap: 20px; // Espaçamento entre os cards
  padding: 20px; // Espaçamento interno no container
  margin-bottom: 32px;
`
