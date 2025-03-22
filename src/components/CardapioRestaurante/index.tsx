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

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setCardapio(data));  // Aqui estamos setando o estado do cardápio com os dados da API
  }, []); // O array vazio garante que a requisição aconteça apenas uma vez ao montar o componente

  return (
    <>
      <ListaRestaurante >
        {cardapio.map((restaurante) => (

          <CardRestaurante key={restaurante.id}  />
        ))}
      </ListaRestaurante>
    </>
  );
};

export default CardapioRestaurante;
