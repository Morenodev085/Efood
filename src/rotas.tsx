import { createBrowserRouter } from "react-router-dom";
import Header from "./compontens/header";
import ListaDeProdutos from "./compontens/listaProdutos";
import Rodape from "./compontens/Rodape";
import HeaderRestaurante from "./compontens/HeaderDeRestaurante";
import Banner from "./compontens/banner";
import CardapioRestaurante from "./compontens/cardapioRestaurante";

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <ListaDeProdutos />
        <Rodape />
      </>
    )
  },
  {
    path: '/italiana',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <Rodape />
      </>
  },
  {
    path: '/árabe',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <Rodape />
      </>
  },
  {
    path: '/japonês',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <Rodape />
      </>
  },
  {
    path: '/português',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <Rodape />
      </>
  },
  {
    path: '/pizzaria',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <Rodape />
      </>
  },
  {
    path: '/vegano',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <Rodape />
      </>
  }
])

export default Rotas
