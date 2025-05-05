
import React, { createContext, useEffect, useState, useContext } from "react"

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

type RestauranteContextType = {
  restaurantes: Restaurante[]
}

const RestauranteContext = createContext<RestauranteContextType>({
  restaurantes: []
})

export const RestauranteProvider = ({ children }: { children: React.ReactNode }) => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <RestauranteContext.Provider value={{ restaurantes }}>
      {children}
    </RestauranteContext.Provider>
  )
}

export const useRestaurantes = () => useContext(RestauranteContext)
