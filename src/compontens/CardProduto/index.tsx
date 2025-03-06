import { useState } from "react";
import { BotaoCardapio, CardDoRestaurante, CartMais,
  DescricaoCardRestaurante, ImgCardapio,
  TituloCardRestaurante, ComponenteModal } from "./styled";
  import useFetchRestaurantes from '../../Api'
import pizza from '../../assets/Pizza.png'

const CardRestaurante = () => {

  const { restaurantes } = useFetchRestaurantes();

  const [visivel, setVisivel] = useState(false);

  // Função para abrir a modal
  const abrirModal = () => setVisivel(true);

  // Função para fechar a modal
  const fecharModal = () => setVisivel(false);
  return (
    <>
      {/* Card do restaurante */}
      <CardDoRestaurante>
        <ImgCardapio src={pizza} alt="Pizza Marguerita" />
        <TituloCardRestaurante>Pizza Marguerita</TituloCardRestaurante>
        <DescricaoCardRestaurante>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </DescricaoCardRestaurante>
        <BotaoCardapio onClick={abrirModal}>Saiba mais</BotaoCardapio>
      </CardDoRestaurante>

      {/* Modal de mais informações */}
      <CartMais className={visivel ? "visivel" : ""}>
        <ComponenteModal className="container">
          <div>
            <ImgCardapio src="https://placehold.co/1024x708" alt="Pizza Marguerita - Detalhe" />
          </div>
          <div className="Infocard">
            <TituloCardRestaurante>Pizza Marguerita</TituloCardRestaurante>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável.
              Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade,
              manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e
              ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo.
              É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <BotaoCardapio className="BotaoModal">Adicionar ao carrinho</BotaoCardapio>
          </div>
        </ComponenteModal>
        <div className="overlay" onClick={fecharModal}></div>
      </CartMais>
    </>
  );
};

export default CardRestaurante;
