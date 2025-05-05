import { CardProduto,
  TitutloCard,
  DescricaoCard,
  Btn,
  CardInformacao,
  LinhaTitutlo,
  ImgProduto,
  NotaP } from "./styles"
import React from "react"
import { FaStar } from "react-icons/fa";



type Props = {
img: string,
titulo: string,
Nota: number,
descricao: string,
to: string
}

const Produto = ({titulo, Nota, descricao, to, img}: Props ) => {

  return (

    <CardInformacao>
    <ImgProduto src={img} alt={titulo} />
    <CardProduto>
      <LinhaTitutlo>
        <TitutloCard>{titulo}</TitutloCard>
        <NotaP>
          {Nota}<FaStar style={{color:"#ff8930"}} />
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
