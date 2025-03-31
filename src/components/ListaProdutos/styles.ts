import styled from "styled-components";

export const ListaProduto = styled.div`
  margin-top: 64px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  max-width: 1048px;
  height: auto;
  margin: 64px auto;
  padding: 64px ;
justify-content: center;
align-items: center;


@media (max-width: 768px) {
  display: grid;
  grid-template-columns: 1fr;
}
`
