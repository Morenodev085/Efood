import { BotaoCardapio, CardDoRestaurante, DescricaoCardRestaurante, ImgCardapio, TitutloCardRestaurante } from "./styled"

const CartRestaurante = () => {
  return (
    <CardDoRestaurante>
      <ImgCardapio src="https://via.placeholder.com/304x167" alt="Pizza Marguerita" />
      <TitutloCardRestaurante>Pizza Marguerita</TitutloCardRestaurante>
      <DescricaoCardRestaurante>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </DescricaoCardRestaurante>
      <BotaoCardapio>Adicionar ao carrinho</BotaoCardapio>
    </CardDoRestaurante>
  )
}

export default CartRestaurante
