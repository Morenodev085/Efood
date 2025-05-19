import React from "react"
import {
  Categoria,
  ContainerBanner,
  InfoBanner,
  TituloBanner
} from "./styles"
import { Restaurante } from "../../pages/Home"

type Props = {
  restaurante: Restaurante
}

const Banner = ({ restaurante }: Props) => {

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
