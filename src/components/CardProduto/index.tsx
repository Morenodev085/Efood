import React from "react";
import { useState } from "react";

import { BotaoCardapio, CardDoRestaurante, CartMais,
  DescricaoCardRestaurante, ImgCardapio,
  TituloCardRestaurante, ComponenteModal,
  ImgCardapioM} from "./styles";

  import { useDispatch } from "react-redux";
  import {add, open} from '../../store/reducers/cart'
import  { ItemDoMenu, Restaurante } from "../../pages/Home";




type Props ={
  restaurante: Restaurante
    cardapio: ItemDoMenu
}

const CardRestaurante = ({restaurante, cardapio }: Props) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
  }

  const [visivel, setVisivel] = useState(false);

  // Função para abrir a modal
  const abrirModal = () => setVisivel(true);

  // Função para fechar a modal
  const fecharModal = () => setVisivel(false);

const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(preco)
};
  return (
    <>
      {/* Card do restaurante */}
      <CardDoRestaurante>
        <ImgCardapio src={cardapio.foto} alt="Foto do alimento" />
        <TituloCardRestaurante>{cardapio.nome}</TituloCardRestaurante>
        <DescricaoCardRestaurante>
          {cardapio.descricao}
        </DescricaoCardRestaurante>
        <BotaoCardapio onClick={abrirModal}>Saiba mais</BotaoCardapio>
      </CardDoRestaurante>

      {/* Modal de mais informações */}
      <CartMais className={visivel ? "visivel" : ""}>
        <ComponenteModal className="container">
          <div>
            <ImgCardapioM src={cardapio.foto} alt="Prato do restaurante" />
          </div>
          <div className="Infocard">
            <TituloCardRestaurante>{cardapio.nome}</TituloCardRestaurante>
            <p>
              {cardapio.descricao}
            </p>
            <p>Serve: {cardapio.porcao}</p>
            <BotaoCardapio onClick={addToCart} className="BotaoModal">
  Adicionar ao carrinho {formataPreco(cardapio.preco)}
</BotaoCardapio>
          </div>
        </ComponenteModal>
        <div className="overlay" onClick={fecharModal}></div>
      </CartMais>
    </>
  );
};

export default CardRestaurante;
