import React from "react";
import { BotaoCardapio } from "../CardProduto/styles";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close } from '../../store/reducers/checkout';
import { CheckoutConteiner, CheckoutOverlay, Sidebarcheckout } from "./styles";

const Checkout = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCard = () => {
    dispatch(close());
  };



  return (
    <CheckoutConteiner >
      <CheckoutOverlay onClick={closeCard} />
      <Sidebarcheckout>
        <h3>Entrega</h3>
        <div>
          <label htmlFor="recptor">Quem ira receber</label>
          <input id="recptor" type="text" />
        </div>
        <div>
          <label htmlFor="endereco">Endereco</label>
          <input id="endereco" type="text" />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input id="cidade" type="text" />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input id="cep" type="number" />
          <label htmlFor="numero">Numero</label>
          <input id="numero" type="text" />
        </div>
        <div>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input id="complemento" type="text" />
        </div>
      </Sidebarcheckout>
    </CheckoutConteiner>
  );
};

export default Checkout;
