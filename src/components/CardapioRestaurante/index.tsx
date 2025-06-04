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
      {cardapio.map((item) => {
        const novoItem: ItemDoMenu = {
          descricao: item.descricao,
          foto: item.foto,
          nome: item.nome,
          porcao: item.porcao,
          preco: item.preco,

        };

        return (
          <CardProduto
            key={restaurante.id}
            cardapio={novoItem}
            restaurante={restaurante}
          />
        );
      })}
    </ListaRestaurante>
  );
};

export default CardapioRestaurante;
