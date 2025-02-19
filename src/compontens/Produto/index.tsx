import { CardProduto, TitutloCard, DescricaoCard, Btn, LinhaTitutlo, Nota } from "./styles"
import { CiStar } from "react-icons/ci";



const Props = {

}

const Produto = () => {
  return (
    <CardProduto>
      <img src="https://pixabay.com/pt/photos/sushi-rolos-de-sushi-4956246/" alt="" />
      <LinhaTitutlo>
        <TitutloCard>titutlo</TitutloCard>
        <Nota>
          4.9 <CiStar />
        </Nota>
      </LinhaTitutlo>
      <DescricaoCard>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.
        Experimente o Japão sem sair do lar com nosso delivery!
      </DescricaoCard>
      <Btn >Saiba mais </Btn>
    </CardProduto>
  )
}

export default Produto
