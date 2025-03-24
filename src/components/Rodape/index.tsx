import { Logo } from "../../styles"
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { ContainerRodape, InfoRodape, LinkS, ListaLinks } from './styles'
import logo from '../../assets/logo.png'
import React from "react";


const Rodape = () => {
  return (
    <ContainerRodape>
      <Logo src={logo} alt="Efood"></Logo>
      <ListaLinks>
        <LinkS>
          <FaFacebook />
        </LinkS>
        <LinkS>
          <FaInstagram />
        </LinkS>
        <LinkS>
          <FaTwitterSquare />
        </LinkS>
      </ListaLinks>
      <InfoRodape>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </InfoRodape>
    </ContainerRodape>
  )
}

export default Rodape
