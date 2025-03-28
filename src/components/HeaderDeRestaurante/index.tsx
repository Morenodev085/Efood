import { Logo } from "../../styles"
import { Cabecalho, NomeDoRestaurate, Centralizador } from "./styles"
import logo from '../../assets/logo.png'
import vetor from '../../assets/Vector.png'
import React from "react"



const HeaderRestaurante = () => {
  return(
    <Cabecalho style={{backgroundImage: `url(${vetor})`}}>
      <Centralizador>
      <NomeDoRestaurate>Restaurante</NomeDoRestaurate>
      <Logo src={logo} alt="Efood"/>
      <NomeDoRestaurate>0 produtos(s) no seu carrinho</NomeDoRestaurate>
      </Centralizador>
    </Cabecalho>
  )
}

export default HeaderRestaurante


