import { useState, useEffect } from 'react';

import CardRestaurante from "../CardProduto";  // Assumindo que esse é o componente que renderiza cada item
import { ListaRestaurante } from "./styles";
import React from 'react';


const CardapioRestaurante = () => {

  type Restaurantes = {
    id: number;
    titulo: string;
    destaque?: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    cardapio: {
      foto: string;
      preco: number;
      id: number;
      nome: string;
      descricao: string;
      porcao: string;
    };
  };

  const [cardapio, setCardapio] = useState<Restaurantes[]>([]);


  return (
    <>
      <ListaRestaurante >

          <CardRestaurante  />
      </ListaRestaurante>
    </>
  );
};

export default CardapioRestaurante;
