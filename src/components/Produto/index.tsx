import { CardProduto,
  TitutloCard,
  DescricaoCard,
  Btn,
  CardInformacao,
  LinhaTitutlo,
  ImgProduto,
  NotaP } from "./styles"

import apresentacao from '../../assets/apresentacao.png'
import React from "react"
import { FaStar } from "react-icons/fa";



type Props = {
titulo: string,
Nota: number,
descricao: string,
to: string
}

const Produto = ({titulo, Nota, descricao, to}: Props ) => {

  return (

    <CardInformacao>
    <ImgProduto src={apresentacao} alt={titulo} />
    <CardProduto>
      <LinhaTitutlo>
        <TitutloCard>{titulo}</TitutloCard>
        <NotaP>
          {Nota}<FaStar />
        </NotaP>
      </LinhaTitutlo>
      <DescricaoCard>
        {descricao}
      </DescricaoCard>
      <Btn to={to}>Saiba mais </Btn>
    </CardProduto>
    </CardInformacao>
  )
}

export default Produto
