import React from 'react';
import CardRestaurante from "../CardProduto";
import { ListaRestaurante } from "./styles";
import { Restaurante } from '../../pages/Home';

type Props = {
  restaurante: Restaurante;
};

const CardapioRestaurante = ({ restaurante }: Props) => {
  return (
    <ListaRestaurante>
      {restaurante.cardapio.map((item, ) => (
        <CardRestaurante
          id={restaurante.id}
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
