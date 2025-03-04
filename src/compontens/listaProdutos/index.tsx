import { useEffect, useState } from "react";
import Produto from "../Produto"
import { ListaProduto } from "./style"


const ListaDeProdutos = () => {

type Restaurantes = {
  id: number;
  titulo: string;
  destaque?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const [cardapio, setCardapio] =useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((data) => setCardapio(data))
  },[])

  return (
    <ListaProduto>
      {cardapio.map((restaurante) => (
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
