import React, { useState } from "react";
import { openMessage } from '../../store/reducers/message';


import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { AreaPergunta, AreaPerguntaDupla, CaixaDosBotoes, Campo, CampoCartao, CampoEndereco, CheckoutConteiner, TituloEntrega, } from "./styles";
import { BotaoCardapio, Overlay, Sidebar } from "../../styles";
import { closeCheckout } from "../../store/reducers/checkout";

const Checkout = () => {
  const { isOpenCheckout } = useSelector((state: RootReducer) => state.checkout);
  const [mostrarEndereco, setMostrarEndereco] = useState(true)
  const dispatch = useDispatch();

  const alteraCampo = () => {
    setMostrarEndereco((prev) => !prev)
  }

  const closemodulo = () => {
    dispatch(closeCheckout());
  };

  const goToMessage = () => {
    dispatch(openMessage())
    closemodulo()
  }

  return (
    <CheckoutConteiner className={isOpenCheckout ? 'isOpenCheckout' : ''} >
      <Overlay onClick={closemodulo} />
      <Sidebar>
        {/* delivery addresss */}
        <CampoEndereco isVisible={mostrarEndereco} >
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
            <BotaoCardapio style={{ marginBottom: 8 }} onClick={alteraCampo}>Finalizar pagamento</BotaoCardapio>
            <BotaoCardapio>Voltar para o carrinho</BotaoCardapio>
          </CaixaDosBotoes>
        </CampoEndereco>
        {/* Pay card */}
        <CampoCartao isVisible={mostrarEndereco}>
          <TituloEntrega>Pagamento - Valor a pagar R$ 190,90</TituloEntrega>
          <AreaPergunta>
            <label htmlFor="nomeCartao">Nome do Cartão</label>
            <input id="nomeCartao" type="stryng" />
          </AreaPergunta>

          <AreaPerguntaDupla>
            <Campo>
              <label htmlFor="numeroCartao">Número do cartão</label>
              <input id="numeroCartao" type="number" />
            </Campo>
            <Campo>
              <label htmlFor="CVVNumber">CVV</label>
              <input id="CVVNumber" type="number" />
            </Campo>
          </AreaPerguntaDupla>
          <AreaPerguntaDupla>
            <Campo>
              <label htmlFor="cep">Mês de vencimento</label>
              <input id="cep" type="number" />
            </Campo>
            <Campo>
              <label htmlFor="numero">Ano de vencimento</label>
              <input id="numero" type="number" />
            </Campo>
          </AreaPerguntaDupla>
          <CaixaDosBotoes>
            <BotaoCardapio style={{ marginBottom: 8 }} onClick={goToMessage}>Finalizar pagamento</BotaoCardapio>
            <BotaoCardapio onClick={alteraCampo}>Voltar para a edição de endereço</BotaoCardapio>
          </CaixaDosBotoes>
        </CampoCartao>
      </Sidebar >
    </CheckoutConteiner >
  );
};

export default Checkout;
