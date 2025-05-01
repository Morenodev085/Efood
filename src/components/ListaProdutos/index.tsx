import Produto from "../Produto"
import { ListaProduto } from "./styles"
import React from "react";
import fotoJapa from '../../assets/restarante_japa.png'
import { Restaurante } from '../../pages/Home/'

type Props = {
  restaurantes: Restaurante[]
}

const ListaDeProdutos = ({restaurantes}: Props) => {

  return (
    <ListaProduto>
    {restaurantes.map((restairante)=> (
      <Produto
      key={restairante.id}
      Nota={restairante.avaliacao}
      descricao={restairante.descricao}
      img={restairante.capa}
      titulo={restairante.titulo}
      to={`/${restairante.tipo}`}
      />
    ))}

    </ListaProduto>
  );
};

export default ListaDeProdutos;
