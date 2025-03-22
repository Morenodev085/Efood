import Produto from "../Produto"
import { ListaProduto } from "./styles"
import useFetchRestaurantes from '../../Api'
import React from "react";


const ListaDeProdutos = () => {

  const { restaurantes } = useFetchRestaurantes();

  return (
    <ListaProduto>
      {restaurantes.map((restaurante) => (

        <Produto
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
