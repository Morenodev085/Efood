import React from 'react';
import CardRestaurante from "../CardProduto";
import { ListaRestaurante } from "./styles";

type Prato = {
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

type Props = {
  cardapio: Prato[];
};

const CardapioRestaurante = ({ cardapio }: Props) => {
  return (
    <ListaRestaurante>
      {cardapio.map((item, index) => (
        <CardRestaurante
          key={index}
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
