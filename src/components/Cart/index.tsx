import React from "react"
import { BotaoCardapio } from "../CardProduto/styles"



import { Overlay, CartConteiner, Sidebar, Prices, CardItem, CartLixeira } from './styles'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import {close} from '../../store/reducers/cart'
import { Restaurante } from "../../pages/Home"

type Props = {
  restaurante: Restaurante;
};

const Cart = ({ restaurante }: Props) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)


    const dispatch = useDispatch()

    const closeCard = () => (
      dispatch(close())
    )

    const getAllPreice = () => {
      /*return items.reduce((acumulador, valorAtual) => {
        return (acumulador += valorAtual. .current!)
      }, 0)*/
    }

  return (
    <CartConteiner className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCard} />
      <Sidebar>
        <ul>
    {restaurante.cardapio.map((item, ) =>
          <CardItem key={restaurante.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <span>{item.preco}</span>
              <CartLixeira>X</CartLixeira>
            </div>
          </CardItem>
    )}
        </ul>

        <Prices>Valor total {getAllPreice}</Prices>
        <BotaoCardapio >Comtinuar com a compra</BotaoCardapio>
      </Sidebar>
    </CartConteiner>

  )
}

export default Cart
