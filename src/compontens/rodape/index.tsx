import { Logo } from "../../styles"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { ContainerRodape, InfoRodape, Link, ListaLinks } from './styled'
import logo from '../../assets/logo.png'

const Rodape = () => {
  return (
    <ContainerRodape>
      <Logo src={logo} alt="Efood"></Logo>
      <ListaLinks>
        <Link><a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a></Link>
        <Link><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a></Link>
        <Link><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a></Link>
      </ListaLinks>
      <InfoRodape>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </InfoRodape>
    </ContainerRodape>
  )
}

export default Rodape
