import { useState, useEffect } from "react";

export type Cardapio = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Restaurantes = {
  id: number;
  titulo: string;
  destaque?: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  cardapio: Cardapio[];
};

const useFetchRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurantes = async () => {
      try {
        const response = await fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes");
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const data = await response.json();
        setRestaurantes(data);
      } catch (err) {
        setError("Erro ao carregar os dados da API.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantes();
  }, []); // A requisição só ocorre uma vez, quando o componente é montado.

  return { restaurantes, loading, error };
};

export default useFetchRestaurantes;
