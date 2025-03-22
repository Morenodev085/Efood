import { CardProduto, TitutloCard, DescricaoCard, Btn, LinhaTitutlo, NotaP } from "./styles"

import apresentacao from '../../assets/apresentacao.png'
import React from "react"


type Props = {
titulo: string,
Nota: number,
descricao: string,
to: string
}

const Produto = ({titulo, Nota, descricao, to}: Props ) => {

  return (
    <CardProduto>
      <img src={apresentacao} alt={titulo} />
      <LinhaTitutlo>
        <TitutloCard>{titulo}</TitutloCard>
        <NotaP>
          {Nota}
        </NotaP>
      </LinhaTitutlo>
      <DescricaoCard>
        {descricao}
      </DescricaoCard>
      <Btn to={to}>Saiba mais </Btn>
    </CardProduto>
  )
}

export default Produto
