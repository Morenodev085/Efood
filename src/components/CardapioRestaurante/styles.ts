import styled from "styled-components";

export const ListaRestaurante = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px; // Espaçamento entre os cards
  padding: 80px;
  max-width: 1200px; // Limite para o tamanho do contêiner
  margin-left: auto;
  margin-right: auto; // Centraliza o grid horizontalmente
`;
