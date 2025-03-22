import { Logo } from "../../styles"
import { FaFacebook } from "react-icons/fa";
import { ContainerRodape, InfoRodape, LinkS, ListaLinks } from './styles'
import logo from '../../assets/logo.png'
import React from "react";

const Rodape = () => {
  return (
    <ContainerRodape>
      <Logo src={logo} alt="Efood"></Logo>
      <ListaLinks>
        <LinkS><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a></LinkS>
        <LinkS><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">

        </a></LinkS>
        <LinkS><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">

        </a></LinkS>
      </ListaLinks>
      <InfoRodape>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </InfoRodape>
    </ContainerRodape>
  )
}

export default Rodape
