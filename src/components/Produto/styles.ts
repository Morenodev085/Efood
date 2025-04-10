import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";


export const CardInformacao = styled.div`
width: 472px;
height:  416px;
`

export const CardProduto = styled.div`
height: auto;
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelho};
  word-wrap: break-word;
  overflow: hidden;
  padding-bottom: 12px;
  padding-top: 8px;

  @media (max-width: 768px) {
    margin-left: 32px;
  }
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
  white-space: nowrap;
`
export const ImgProduto = styled.img`
  width: 472px;
  height:  217px;
  object-fit: cover;
`

export const NotaP = styled.p`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
  width: 100%;
`
export const DescricaoCard = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  margin-left: 8px;
  padding-right: 16px;

`
export const Btn = styled(Link)`
  background-color: ${cores.vermelho};
  width: 82px;
  height: 24px;
  color: ${cores.branco};
  border: none;
  margin-left: 8px;
  flex-shrink: 0;
  text-decoration: none;
  font-size: 14px;
  padding:  8px;
  font-weight: bold;

`
