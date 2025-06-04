import React from 'react';
import CardRestaurante from "../CardProduto";
import { ListaRestaurante } from "./styles";
import {  Produto, Restaurante } from '../../pages/Home';

type Props = {
  restaurante: Restaurante;
  cardapio: Produto;
};

const CardapioRestaurante = ({ restaurante, cardapio }: Props) => {
  return (
    <ListaRestaurante>

        <CardRestaurante
          id={restaurante.id}
          preco={cardapio.preco}
          nome={cardapio.nome}
          descricao={cardapio.descricao}
          foto={cardapio.foto}
          porcao={cardapio.porcao}
        />
    </ListaRestaurante>
  );
};

export default CardapioRestaurante;
