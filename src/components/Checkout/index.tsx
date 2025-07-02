import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { AreaPergunta, AreaPerguntaDupla, CaixaDosBotoes, Campo, CheckoutConteiner, TituloEntrega, } from "./styles";
import { BotaoCardapio, Overlay, Sidebar } from "../../styles";
import { closeCheckout } from "../../store/reducers/checkout";

const Checkout = () => {
  const { isOpenCheckout } = useSelector((state: RootReducer) => state.checkout);
  const dispatch = useDispatch();

  const closemodulo = () => {
    dispatch(closeCheckout());
  };

  const goToMessage = () => {
    // dispatch(open())
    closemodulo()
  }

  return (
    <CheckoutConteiner className={isOpenCheckout ? 'isOpenCheckout' : ''} >
      <Overlay onClick={closemodulo} />
      <Sidebar>
        <TituloEntrega>Entrega</TituloEntrega>
        <AreaPergunta>
          <label htmlFor="recptor">Quem ira receber</label>
          <input id="recptor" type="text" />
        </AreaPergunta>
        <AreaPergunta>
          <label htmlFor="endereco">Endereco</label>
          <input id="endereco" type="text" />
        </AreaPergunta>
        <AreaPergunta>
          <label htmlFor="cidade">Cidade</label>
          <input id="cidade" type="text" />
        </AreaPergunta>
        <AreaPerguntaDupla>
          <Campo>
            <label htmlFor="cep">CEP</label>
            <input id="cep" type="number" />
          </Campo>
          <Campo>
            <label htmlFor="numero">Numero</label>
            <input id="numero" type="number" />
          </Campo>
        </AreaPerguntaDupla>
        <AreaPergunta>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input id="complemento" type="text" />
        </AreaPergunta>
        <CaixaDosBotoes>
          <BotaoCardapio style={{ marginBottom: 8 }} onClick={goToMessage}>Finalizar pagamento</BotaoCardapio>
          <BotaoCardapio>Voltar para a edição de endereço</BotaoCardapio>
        </CaixaDosBotoes>
      </Sidebar>
    </CheckoutConteiner>
  );
};

export default Checkout;
