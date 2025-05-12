import React from "react"
import { Categoria, ContainerBanner, InfoBanner, TituloBanner } from "./styles"
import { useRestaurantes } from "../../Context" // ajuste o caminho se estiver diferente

const Banner = () => {
  const { restaurantes } = useRestaurantes()

  const restaurante = restaurantes[0] // Mostra o primeiro restaurante por padrão

  if (!restaurante) return null

  return (
    <ContainerBanner
      style={{ backgroundImage: `url(${restaurante.capa})` }}
      className="container"
    >
      <InfoBanner>
        <Categoria>{restaurante.tipo}</Categoria>
        <TituloBanner>{restaurante.titulo}</TituloBanner>
      </InfoBanner>
    </ContainerBanner>
  )
}

export default Banner
