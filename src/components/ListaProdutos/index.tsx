import Produto from "../Produto"
import { ListaProduto } from "./styles"
import useFetchRestaurantes from '../../Api'
import React from "react";
import fotoJapa from '../../assets/restarante_japa.png'
import cardapio from '../../assets/apresentacao.png'

const ListaDeProdutos = () => {

  const { restaurantes } = useFetchRestaurantes();

  return (
    <ListaProduto>
      <Produto img={fotoJapa} Nota={4.9} titulo="hioki Sushi" descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery! Peça já o melhor da culinária japonesa no conforto da sua casa!" to="#" key={90} />
      {restaurantes.map((restaurante) => (

        <Produto
          img={cardapio}
          key={restaurante.id} // Garantir que cada item tenha uma chave única
          to={`/${restaurante.tipo}`} // Se necessário, altere para o link correto
          Nota={restaurante.avaliacao} // Exibindo a avaliação de cada restaurante
          titulo={restaurante.titulo} // Exibindo o título do restaurante
          descricao={restaurante.descricao} // Exibindo a descrição do restaurante
        />
      ))}
    </ListaProduto>
  );
};

export default ListaDeProdutos;
