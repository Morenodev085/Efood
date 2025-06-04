import React from 'react';
import CardProduto from "../CardProduto";
import { ListaRestaurante } from "./styles";
import { ItemDoMenu, Restaurante } from '../../pages/Home';

type Props = {
  restaurante: Restaurante;
  cardapio: ItemDoMenu[];
}

const CardapioRestaurante = ({ restaurante, cardapio }: Props) => {
  return (
    <ListaRestaurante>
      {cardapio.map((item) => (
        <CardProduto
          key={restaurante.id}
          preco={item.preco}
          nome={item.nome}
          descricao={item.descricao}
          foto={item.foto}
          porcao={item.porcao}
        />
      ))}
    </ListaRestaurante>
  );
};

export default CardapioRestaurante;
