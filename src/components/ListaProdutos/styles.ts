import styled from "styled-components";

export const ListaProduto = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 1024px;
  margin: 64px auto;

@media (max-width: 768px) {
  display: grid;
  grid-template-columns: 1fr;
}
`
