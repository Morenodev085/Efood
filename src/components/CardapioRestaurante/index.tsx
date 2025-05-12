import React from 'react';
import CardRestaurante from "../CardProduto";
import { ListaRestaurante } from "./styles";
import { Restaurante } from '../../pages/Home';

type Props = {
  restaurantes: Restaurante[]
};

const CardapioRestaurante = ({ restaurantes }: Props) => {
  return (
<ListaRestaurante>
      {restaurantes.map((restaurante) =>
        restaurante.cardapio.map((item, index) => (
          <CardRestaurante
            key={index}
            id={restaurante.id}
            preco={item.preco}
            nome={item.nome}
            descricao={item.descricao}
            foto={item.foto}
            porcao={item.porcao}
          />
        ))
      )}
    </ListaRestaurante>
  );
};

export default CardapioRestaurante;
