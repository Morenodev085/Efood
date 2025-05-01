import { useState, useEffect } from 'react';

import CardRestaurante from "../CardProduto";  // Assumindo que esse é o componente que renderiza cada item
import { ListaRestaurante } from "./styles";
import React from 'react';
import { Restaurante } from '../../pages/Home';

type Props = {
  restaurante: Restaurante[];
}

const CardapioRestaurante = ({restaurante}: Props) => {

  return (

      <ListaRestaurante >
        {restaurante.map((rest) =>
        rest.cardapio.map((item,index) => (
          <CardRestaurante
          key={`${rest.id}-${index}`}
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
