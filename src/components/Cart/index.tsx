import React from "react"
import { BotaoCardapio } from "../CardProduto/styles"



import { Overlay, CartConteiner, Sidebar, Prices, CardItem, CartLixeira } from './styles'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import {close} from '../../store/reducers/cart'


const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)


    const dispatch = useDispatch()

    const closeCard = () => (
      dispatch(close())
    )

  return (
    <CartConteiner className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCard} />
      <Sidebar>
        <ul>
    {items.map((item) =>
          <CardItem key={item.id}>
            <img src={item.cardapio.} alt={item.cardapio.} />
            <div>
              <h3>{item.cardapio.}</h3>
              <span>{item.cardapio.}</span>
              <CartLixeira>X</CartLixeira>
            </div>
          </CardItem>
    )}
        </ul>

        <Prices>Valor total R$182,70</Prices>
        <BotaoCardapio >Comtinuar com a compra</BotaoCardapio>
      </Sidebar>
    </CartConteiner>

  )
}

export default Cart
