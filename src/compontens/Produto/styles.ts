import styled from "styled-components";
import { cores } from "../../styles";

export const CardProduto = styled.div`
  max-height: 181px;
  max-width:  472px;
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelho};
  word-wrap: break-word;
  overflow: hidden;
`
export const LinhaTitutlo = styled.div`
  display: flex;
  `
export const TitutloCard = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-right: 64px;
  margin-left: 8px;

`
export const Nota = styled.p`
display: flex;
  justify-content: flex-end;  /* Certifique-se de que o container do Nota seja flex */
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
  width: 100%;  /* Adiciona 100% de largura para garantir que a justificação funcione */
`
export const DescricaoCard = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  margin-left: 8px;

`
export const Btn = styled.button`
  background-color: ${cores.vermelho};
  width: 82px;
  height: 24px;
  color: ${cores.branco};
  border: none;
  margin-bottom: 4px;
  margin-left: 8px;
  flex-shrink: 0;
`
