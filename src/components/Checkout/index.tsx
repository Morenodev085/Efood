import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer} from "../../store";
import { close } from '../../store/reducers/checkout';
import { AreaPergunta, AreaPerguntaDupla, CaixaDosBotoes, Campo, CheckoutConteiner, TituloEntrega, } from "./styles";
import { BotaoCardapio, Overlay, Sidebar } from "../../styles";

const Checkout = () => {
  const { isOpen} = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCard = () => {
    dispatch(close());
  };


  return (
    <CheckoutConteiner className={isOpen ? 'is-open' : ''} >
      <Overlay onClick={closeCard} />
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
        <BotaoCardapio style={{marginBottom: 8}}>Finalizar pagamento</BotaoCardapio>
        <BotaoCardapio>Voltar para a edição de endereço</BotaoCardapio>
        </CaixaDosBotoes>
      </Sidebar>
    </CheckoutConteiner>
  );
};

export default Checkout;
