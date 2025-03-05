import { useState } from "react";
import { BotaoCardapio, CardDoRestaurante, CartMais,
  DescricaoCardRestaurante, ImgCardapio,
  TituloCardRestaurante, ComponenteModal } from "./styled";
import useFetchRestaurantes from '../../Api';

const CardRestaurante = () => {
  const { restaurantes } = useFetchRestaurantes();  // Pega os dados da API
  const [visivel, setVisivel] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);  // Para armazenar o produto selecionado

  // Função para abrir a modal e selecionar o produto
  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
    setVisivel(true);
  };

  // Função para fechar a modal
  const fecharModal = () => setVisivel(false);

  return (
    <div>
      {/* Iterar sobre os restaurantes para gerar os cards */}
      {restaurantes && restaurantes.length > 0 ? (
        restaurantes.map((restaurante) => (
          restaurante.cardapio.map((produto) => (
            <CardDoRestaurante key={produto.id}>
              <ImgCardapio src={produto.foto || "https://placehold.co/1024x708"} alt={produto.nome} />
              <TituloCardRestaurante>{produto.nome}</TituloCardRestaurante>
              <DescricaoCardRestaurante>
                {produto.descricao}
              </DescricaoCardRestaurante>
              <BotaoCardapio onClick={() => abrirModal(produto)}>Saiba mais</BotaoCardapio>
            </CardDoRestaurante>
          ))
        ))
      ) : (
        <p>Carregando restaurantes...</p>  // Exibe uma mensagem de carregamento se os dados não estiverem disponíveis
      )}

      {/* Modal de mais informações */}
      {produtoSelecionado && (
        <CartMais className={visivel ? "visivel" : ""}>
          <ComponenteModal className="container">
            <div>
              <ImgCardapio src={produtoSelecionado.foto || "https://placehold.co/1024x708"} alt={produtoSelecionado.nome} />
            </div>
            <div className="Infocard">
              <TituloCardRestaurante>{produtoSelecionado.nome}</TituloCardRestaurante>
              <p>{produtoSelecionado.descricao}</p>
              <p>Serve: {produtoSelecionado.porcao}</p>
              <BotaoCardapio className="BotaoModal">Adicionar ao carrinho</BotaoCardapio>
            </div>
          </ComponenteModal>
          <div className="overlay" onClick={fecharModal}></div>
        </CartMais>
      )}
    </div>
  );
};

export default CardRestaurante;
