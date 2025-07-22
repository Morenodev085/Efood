import React from "react";
import { BotaoCardapio, Overlay, Sidebar } from "../../styles";
import { MessaageConteiner, Text, Paragrafo, Title } from './styles';
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { closeMessage } from "../../store/reducers/message";

const ClosingMessage = () => {
  const { isOpenMessage, orderId } = useSelector((state: RootReducer) => state.message);
  const dispatch = useDispatch();

  const closemodulo = () => {
    dispatch(closeMessage());
  };

  return (
    <MessaageConteiner className={isOpenMessage ? 'isOpenMessage' : ''}>
      <Overlay onClick={closemodulo} />
      <Sidebar>
        <Paragrafo>
          <Title>
            Pedido realizado - {orderId ?? `carregando...`}
          </Title>
          <Text>
            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.<br /><br />
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. <br /><br />
            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.<br /><br />
            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
          </Text>
        </Paragrafo>
        <BotaoCardapio onClick={closemodulo}>Concluir</BotaoCardapio>
      </Sidebar>
    </MessaageConteiner>
  );
};

export default ClosingMessage;
