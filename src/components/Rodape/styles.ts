import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerRodape = styled.div`
  background-color: ${cores.creme};
  max-height: 298px;
  color: ${cores.vermelho};
  display: flex;
  flex-direction: column;
  align-items: center;
;
`

export const ListaLinks = styled.ul`
  display: flex;
  list-style-type: none;
  margin-bottom: 32px;
  align-items: center;
  `

export const LinkS = styled.li`
  font-size: 24px;
  margin-left: 8px;
  color: ${cores.vermelho};
  text-decoration: none;
  cursor: pointer;
`
export const InfoRodape = styled.h4`
  font-size: 10px;
  max-width: 480px;
  text-align: center;
  margin-bottom: 8px;
`

