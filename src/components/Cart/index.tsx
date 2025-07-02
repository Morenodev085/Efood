import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CartConteiner,
  Prices,
  CardItem,
  CartLixeira
} from './styles';
import { RootReducer } from "../../store";
import { close, remove } from '../../store/reducers/cart';
import { BotaoCardapio, Overlay, Sidebar } from "../../styles";

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

const goToCheckput = () => (
  
  closeCard()
)

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
                <span>R$ {item.preco.toFixed(2)}</span>
                <CartLixeira onClick={() => removeItem(item.id)}>X</CartLixeira>
              </div>
            </CardItem>
          ))}
        </ul>

        <Prices>Valor total: R$ {getAllPrice().toFixed(2)}</Prices>
        <BotaoCardapio onClick={goToCheckput} >Continuar com a compra</BotaoCardapio>
      </Sidebar>
    </CartConteiner>
  );
};

export default Cart;
