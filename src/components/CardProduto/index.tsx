import React from "react";
import { useState } from "react";

import { BotaoCardapio, CardDoRestaurante, CartMais,
  DescricaoCardRestaurante, ImgCardapio,
  TituloCardRestaurante, ComponenteModal } from "./styles";

  import { useDispatch } from "react-redux";
  import {add, open} from '../../store/reducers/cart'
import  { Restaurante } from "../../pages/Home";


type Props = {
  id: number
  foto: string
  nome: string;
  descricao: string;
  preco: number;
  porcao: string;
};

type Props2 ={
  restaurante: Restaurante
}

const CardRestaurante = ({foto,nome,descricao,id,preco, porcao, }: Props) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(restaurante))
    dispatch(open())
  }

  const [visivel, setVisivel] = useState(false);

  // Função para abrir a modal
  const abrirModal = () => setVisivel(true);

  // Função para fechar a modal
  const fecharModal = () => setVisivel(false);
  return (
    <>
      {/* Card do restaurante */}
      <CardDoRestaurante>
        <ImgCardapio src={foto} alt="Foto do alimento" />
        <TituloCardRestaurante>{nome}</TituloCardRestaurante>
        <DescricaoCardRestaurante>
          {descricao}
        </DescricaoCardRestaurante>
        <BotaoCardapio onClick={abrirModal}>Saiba mais</BotaoCardapio>
      </CardDoRestaurante>

      {/* Modal de mais informações */}
      <CartMais className={visivel ? "visivel" : ""}>
        <ComponenteModal className="container">
          <div>
            <ImgCardapio src={foto} alt="Prato do restaurante" />
          </div>
          <div className="Infocard">
            <TituloCardRestaurante>{nome}</TituloCardRestaurante>
            <p>
              {descricao}
            </p>
            <p>{porcao}</p>
            <BotaoCardapio className="BotaoModal">Adicionar ao carrinho - {preco}</BotaoCardapio>
          </div>
        </ComponenteModal>
        <div className="overlay" onClick={fecharModal}></div>
      </CartMais>
    </>
  );
};

export default CardRestaurante;
