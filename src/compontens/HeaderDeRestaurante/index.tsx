import { Logo } from "../../styles"
import { Cabecalho, NomeDoRestaurate, TituloH, } from "./styles"
import logo from '../../assets/logo.png'


const HeaderRestaurante = () => {
  return(
    <Cabecalho style={{}}>
      <NomeDoRestaurate>Restaurante</NomeDoRestaurate>
      <Logo src={logo} alt="Efood"/>
      <NomeDoRestaurate>0 produtos(s) no seu carrinho</NomeDoRestaurate>
    </Cabecalho>
  )
}

export default HeaderRestaurante


