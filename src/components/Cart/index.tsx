import React from "react";
import { BotaoCardapio } from "../CardProduto/styles";
import {
  Overlay,
  CartConteiner,
  Sidebar,
  Prices,
  CardItem,
  CartLixeira
} from './styles';
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close } from '../../store/reducers/cart';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCard = () => {
    dispatch(close());
  };

  const getAllPrice = () => {
    return items.reduce((acumulador, item) => acumulador + item.preco, 0);
  };

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
                <CartLixeira>X</CartLixeira>
              </div>
            </CardItem>
          ))}
        </ul>

        <Prices>Valor total: R$ {getAllPrice().toFixed(2)}</Prices>
        <BotaoCardapio>Continuar com a compra</BotaoCardapio>
      </Sidebar>
    </CartConteiner>
  );
};

export default Cart;
