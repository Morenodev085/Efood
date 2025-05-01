import { Logo } from "../../styles"
import { Cabecalho, TituloH, } from "./styles"
import vetor from '../../assets/Vector.png'
import logo from '../../assets/logo.png'
import React from "react"


const Header = () => {
  return (
    <Cabecalho style={{ backgroundImage: `url(${vetor})` }}>
      <Logo src={logo} alt="Efood" />
      <TituloH>Viva experiências gastronômicas<br /> no conforto da sua casa</TituloH>
    </Cabecalho>
  )
}

export default Header
