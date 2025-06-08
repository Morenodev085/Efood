import React from 'react';
import CardProduto from "../CardProduto";
import { ListaRestaurante } from "./styles";
import { ItemDoMenu, Restaurante } from '../../pages/Home';

type Props = {
  restaurante: Restaurante;
};

const CardapioRestaurante = ({ restaurante }: Props) => {
  return (
    <ListaRestaurante>
      {restaurante.cardapio.map((item) => (
        <CardProduto
          key={item.id}
          cardapio={item}
          restaurante={restaurante}
        />
      ))}
    </ListaRestaurante>
  );
};

export default CardapioRestaurante;
