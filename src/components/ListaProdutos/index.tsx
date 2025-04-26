import Produto from "../Produto"
import { ListaProduto } from "./styles"
import React from "react";
import fotoJapa from '../../assets/restarante_japa.png'
import cardapio from '../../assets/apresentacao.png'

const ListaDeProdutos = () => {


  return (
    <ListaProduto>
      <Produto img={fotoJapa} Nota={4.9} titulo="hioki Sushi" descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery! Peça já o melhor da culinária japonesa no conforto da sua casa!" to="#" key={90} />

        <Produto img={cardapio} Nota={4.9} titulo="hioki Sushi" descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery! Peça já o melhor da culinária japonesa no conforto da sua casa!" to="#" key={90}
        />
    </ListaProduto>
  );
};

export default ListaDeProdutos;
