import React from "react"
import { Categoria, ContainerBanner, InfoBanner, TituloBanner } from "./style"

const Banner = () => {
  return (
    <ContainerBanner>
      <InfoBanner>
        <Categoria>Italiano</Categoria>
        <TituloBanner>La Dolce Vita Trattoria</TituloBanner>
      </InfoBanner>
    </ContainerBanner>
  )
}

export default Banner
