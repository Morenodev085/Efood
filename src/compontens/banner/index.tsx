import React from "react"
import { Categoria, ContainerBanner, InfoBanner, TituloBanner } from "./style"

import apresentacao from '../../assets/apresentacao.png'

const Banner = () => {



  return (
    <ContainerBanner>
      <InfoBanner style={{backgroundImage: `url(${apresentacao})`}}>
        <Categoria>Italiano</Categoria>
        <TituloBanner>La Dolce Vita Trattoria</TituloBanner>
      </InfoBanner>
    </ContainerBanner>
  )
}

export default Banner
