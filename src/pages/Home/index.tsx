import React, { useEffect, useState } from "react"
import Header from "../../components/Cabecalho"
import ListaDeProdutos from "../../components/ListaProdutos"
import Rodape from "../../components/Rodape"
import { useGetFeatureRestauranteQuery } from "../../services/api"

export type Restaurante = {
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;

}

export type  ItemDoMenu  = {
    foto: string;
    preco: number ;
    nome: string;
    descricao: string;
    porcao: string;
}


const Home = () => {


  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
    .then((res) => res.json())
    .then((res) => setRestaurantes(res))
  }, [])
  return (
    <>
      <Header />
      <ListaDeProdutos restaurantes ={restaurantes} />
      <Rodape />
    </>
  )
}



export default Home
