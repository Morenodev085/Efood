import styled from "styled-components";

export const ListaRestaurante = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); // Usa auto-fill para limitar as colunas e evita multiplicação
  grid-gap: 20px; // Espaçamento entre os cards
  padding: 20px; // Espaçamento interno no container
  margin-bottom: 32px;
  max-width: 1200px; // Limite para o tamanho do contêiner
  margin-left: auto;
  margin-right: auto; // Centraliza o grid horizontalmente
`;
