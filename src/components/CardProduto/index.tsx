import { useState } from "react";
import { BotaoCardapio, CardDoRestaurante, CartMais,
  DescricaoCardRestaurante, ImgCardapio,
  TituloCardRestaurante, ComponenteModal } from "./styles";
import pizza from '../../assets/Pizza.png'
import React from "react";

type Props = {
  foto: string
  nome: string;
  descricao: string;
  preco: number;
  porcao: string;
};

const CardRestaurante = ({foto,nome,descricao,preco, porcao}: Props) => {


  const [visivel, setVisivel] = useState(false);

  // Função para abrir a modal
  const abrirModal = () => setVisivel(true);

  // Função para fechar a modal
  const fecharModal = () => setVisivel(false);
  return (
    <>
      {/* Card do restaurante */}
      <CardDoRestaurante>
        <ImgCardapio src={foto} alt="Pizza Marguerita" />
        <TituloCardRestaurante>{nome}</TituloCardRestaurante>
        <DescricaoCardRestaurante>
          {descricao}
        </DescricaoCardRestaurante>
        <BotaoCardapio onClick={abrirModal}>Saiba mais</BotaoCardapio>
      </CardDoRestaurante>

      {/* Modal de mais informações */}
      <CartMais className={visivel ? "visivel" : ""}>
        <ComponenteModal className="container">
          <div>
            <ImgCardapio src={foto} alt="Prato do restaurante" />
          </div>
          <div className="Infocard">
            <TituloCardRestaurante>{nome}</TituloCardRestaurante>
            <p>
              {descricao}
            </p>
            <p>{porcao}</p>
            <BotaoCardapio className="BotaoModal">Adicionar ao carrinho</BotaoCardapio>
          </div>
        </ComponenteModal>
        <div className="overlay" onClick={fecharModal}></div>
      </CartMais>
    </>
  );
};

export default CardRestaurante;
