import { CardProduto, TitutloCard, DescricaoCard, Btn, LinhaTitutlo, NotaP } from "./styles"
import { FaStar } from "react-icons/fa";



type Props = {
titulo: string,
Nota: number,
descricao: string,
to?: string
}

const Produto = ({titulo, Nota, descricao, to}: Props ) => {
  return (
    <CardProduto>
      <img src="https://pixabay.com/get/g2f9e1e3adfc8474e_1280.jpg" alt={titulo} />
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
  )
}

export default Produto
