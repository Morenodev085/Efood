import React from "react"

import { Cabecalho, NomeDoRestaurate, Centralizador, BotaoDoRestaurate } from "./styles"

import { Logo } from "../../styles"
import logo from '../../assets/logo.png'
import vetor from '../../assets/Vector.png'

import {open} from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"



const HeaderRestaurante = () => {

  const dispatch = useDispatch()
  const {items} = useSelector((state: RootReducer) => state.cart)

  const openCart = () => (
    dispatch(open())
  )

  return(
    <Cabecalho style={{backgroundImage: `url(${vetor})`}}>
      <Centralizador>
      <NomeDoRestaurate>Restaurante</NomeDoRestaurate>
      <Logo src={logo} alt="Efood"/>
      <BotaoDoRestaurate onClick={openCart}> {items.length} produtos(s) no seu carrinho</BotaoDoRestaurate>
      </Centralizador>
    </Cabecalho>
  )
}

export default HeaderRestaurante


