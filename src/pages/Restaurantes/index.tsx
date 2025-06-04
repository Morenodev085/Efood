import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import CardapioRestaurante from "../../components/CardapioRestaurante";
import HeaderRestaurante from "../../components/HeaderDeRestaurante";
import Rodape from "../../components/Rodape";
import { useParams } from "react-router-dom";
import type { Restaurante, ItemDoMenu } from "../Home";




const Restaurantes = () => {
  const {id} = useParams();

  const [restaurante, setRestaurantes] = useState<Restaurante>();



  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res));
  }, [id]);

  if(!restaurante){
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderRestaurante />
      <Banner restaurante={restaurante} />
        <CardapioRestaurante restaurante={restaurante} cardapio={[]}  />
      <Rodape />
    </>
  );
}
export default Restaurantes;
