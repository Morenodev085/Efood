import { Logo } from "../../styles"
import { Cabecalho, TituloH, } from "./styles"

const Header = () => {
  return(
    <Cabecalho style={{}}>
      <Logo src='https://via.placeholder.com/125x58' alt="Efood"/>
      <TituloH>Viva experiências gastronômicas<br/> no conforto da sua casa</TituloH>
    </Cabecalho>
  )
}

export default Header
