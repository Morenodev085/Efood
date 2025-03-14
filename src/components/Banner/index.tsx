import React from "react"
import { Categoria, ContainerBanner, InfoBanner, TituloBanner } from "./styles"

import apresentacao from '../../assets/apresentacao.png'

const Banner = () => {



  return (
    <ContainerBanner style={{backgroundImage: `url(${apresentacao})`}} className="container">
      <InfoBanner  >
        <Categoria>Italiano</Categoria>
        <TituloBanner>La Dolce Vita Trattoria</TituloBanner>
      </InfoBanner>
    </ContainerBanner>
  )
}

export default Banner
