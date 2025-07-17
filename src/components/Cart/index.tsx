import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCheckout } from '../../store/reducers/checkout';


import {
  CartConteiner,
  Prices,
  CardItem,
  CartLixeira
} from './styles';
import { RootReducer } from "../../store";
import { close, remove } from '../../store/reducers/cart';
import { BotaoCardapio, Overlay, Sidebar } from "../../styles";

    export const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(preco)
  };

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();


  const closeCard = () => {
    dispatch(close());
  };

  const getAllPrice = () => {
    return items.reduce((acumulador, item) => acumulador + item.preco, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckput = () => {
  dispatch(openCheckout())
  closeCard()
  }


  return (
    <CartConteiner className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCard} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span> {formataPreco(item.preco)}</span>
                <CartLixeira onClick={() => removeItem(item.id)}>X</CartLixeira>
              </div>
            </CardItem>
          ))}
        </ul>

        <Prices>Valor total: {formataPreco(getAllPrice())}</Prices>
        <BotaoCardapio onClick={goToCheckput} >Continuar com a compra</BotaoCardapio>
      </Sidebar>
    </CartConteiner>
  );
};

export default Cart;


