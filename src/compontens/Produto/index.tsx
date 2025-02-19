import { CardProduto, TitutloCard, DescricaoCard, Btn, LinhaTitutlo, Nota } from "./styles"


const Produto = () => {
  return (
    <CardProduto>
      <img src="https://via.placeholder.com/472x217" alt="" />
      <LinhaTitutlo>
        <TitutloCard>titutlo</TitutloCard>
        <Nota>4.9</Nota>
      </LinhaTitutlo>
      <DescricaoCard>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.
        Experimente o Japão sem sair do lar com nosso delivery!
      </DescricaoCard>
      <Btn>Saiba mais </Btn>
    </CardProduto>
  )
}

export default Produto
