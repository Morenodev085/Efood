import { Logo } from "../../styles"
import { Cabecalho, NomeDoRestaurate, TituloH, } from "./styles"

const HeaderRestaurante = () => {
  return(
    <Cabecalho style={{}}>
      <NomeDoRestaurate>Restaurante</NomeDoRestaurate>
      <Logo src='https://placehold.co/125x58' alt="Efood"/>
      <NomeDoRestaurate>0 produtos(s) no seu carrinho</NomeDoRestaurate>
    </Cabecalho>
  )
}

export default HeaderRestaurante


