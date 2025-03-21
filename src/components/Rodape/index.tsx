import { Logo } from "../../styles"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { ContainerRodape, InfoRodape, Link, ListaLinks } from './styles'
import logo from '../../assets/logo.png'
import React from "react";

const Rodape = () => {
  return (
    <ContainerRodape>
      <Logo src={logo} alt="Efood"></Logo>
      <ListaLinks>
        <Link><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">

        </a></Link>
        <Link><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">

        </a></Link>
        <Link><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">

        </a></Link>
      </ListaLinks>
      <InfoRodape>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </InfoRodape>
    </ContainerRodape>
  )
}

export default Rodape
