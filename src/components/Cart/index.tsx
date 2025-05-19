import React from "react"
import { BotaoCardapio } from "../CardProduto/styles"



import { Overlay, CartConteiner, Sidebar, Prices, CardItem, CartLixeira } from './styles'

const Cart = () =>
  <CartConteiner>
    <Overlay />
    <Sidebar>
      <ul>
        <CardItem>
          <img src="" alt="" />
          <div>
            <h3>prato</h3>
            <span>R$ 124,00</span>
            <CartLixeira>X</CartLixeira>
          </div>
        </CardItem>
        <CardItem>
          <img src="" alt="" />
          <div>
            <h3>prato</h3>
            <span>R$ 124,00</span>
            <CartLixeira>X</CartLixeira>
          </div>
        </CardItem>
      </ul>

      <Prices>Valor total R$182,70</Prices>
      <BotaoCardapio >Comtinuar com a compra</BotaoCardapio>
    </Sidebar>
  </CartConteiner>


export default Cart
