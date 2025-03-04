import { useEffect, useState } from "react"

import { BotaoCardapio, CardDoRestaurante, CartMais,
  DescricaoCardRestaurante, ImgCardapio, TituloCardRestaurante, ConponenteModal } from "./styled"

const CartRestaurante = () => {

  const [visivel, setVisivel] = useState(false);


  return (
    <>
      <CardDoRestaurante>
        <ImgCardapio src="https://placehold.co/1024x708" alt="Pizza Marguerita" />
        <TituloCardRestaurante>Pizza Marguerita</TituloCardRestaurante>
        <DescricaoCardRestaurante>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </DescricaoCardRestaurante>
        <BotaoCardapio onClick={() => setVisivel(true)}>Saiba mais</BotaoCardapio>
      </CardDoRestaurante>

      <CartMais className= {visivel ? 'visivel' : ''} >
      <ConponenteModal className="container">
        <div>
          <ImgCardapio src="" alt="" />
        </div>
        <div className="Infocard">
          <TituloCardRestaurante>Pizza Marguerita</TituloCardRestaurante>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
          </p>
          <p>Serve: de 2 a 3 pessoas</p>
          <BotaoCardapio className="BotaoModal">Adicionar ao carrinho</BotaoCardapio>
        </div>
      </ConponenteModal>
      <div className="overlay" onClick={() => setVisivel(false)}></div>
    </CartMais >

    </>
  )
}

export default CartRestaurante
