import Produto from "../Produto"
import { ListaProduto } from "./styles"
import React from "react";
import { Restaurante } from '../../pages/Home/'

type Props = {
  restaurantes: Restaurante[]
}

const ListaDeProdutos = ({restaurantes}: Props) => {

  return (
    <ListaProduto>
    {restaurantes.map((restaurante)=> (
      <Produto
      key={restaurante.id}
      Nota={restaurante.avaliacao}
      descricao={restaurante.descricao}
      img={restaurante.capa}
      titulo={restaurante.titulo}
      to={`/${restaurante.id}`}
      />
    ))}

    </ListaProduto>
  );
};

export default ListaDeProdutos;
