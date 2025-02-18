import { Cabecalho, TituloH, Logo } from "./styles"

const Header = () => {
  return(
    <Cabecalho style={{}}>
      <Logo src='https://via.placeholder.com/125x58' alt="Logo"/>
      <TituloH>Viva experiências gastronômicas<br/> no conforto da sua casa</TituloH>
    </Cabecalho>
  )
}

export default Header
