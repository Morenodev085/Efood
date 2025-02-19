import { Logo } from "../../styles"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


import { ContainerRodape, InfoRodape, Link, ListaLinks } from './styled'

const RodaPe = () => {
  return (
    <ContainerRodape>
      <Logo alt="Efood"></Logo>
      <ListaLinks>
        <Link><a href="#" target="_blank" rel="noopener noreferrer">
          <FaSquareInstagram />
        </a></Link>
        <Link><a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a></Link>
        <Link><a href="#" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a></Link>
      </ListaLinks>
      <InfoRodape>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </InfoRodape>
    </ContainerRodape>
  )
}

export default RodaPe
