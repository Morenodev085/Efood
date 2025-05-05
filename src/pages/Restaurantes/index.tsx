import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import CardapioRestaurante from "../../components/CardapioRestaurante";
import HeaderRestaurante from "../../components/HeaderDeRestaurante";
import Rodape from "../../components/Rodape";

export type Restaurante = {
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    foto: string;
    preco: number;
    nome: string;
    descricao: string;
    porcao: string;
  }[];
};

const Restaurante = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res));
  }, []);

  const restauranteSelecionado = restaurantes.length > 0 ? restaurantes[0] : null;

  return (
    <>
      <HeaderRestaurante />
      <Banner />
      {restauranteSelecionado ? (
        <CardapioRestaurante cardapio={restauranteSelecionado.cardapio} />
      ) : (
        <p>Carregando cardápio...</p>
      )}
      <Rodape />
    </>
  );
};

export default Restaurante;
