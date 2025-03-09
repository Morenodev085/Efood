import { createBrowserRouter } from "react-router-dom";
import Header from "./compontens/Header";
import ListaDeProdutos from "./compontens/ListaProdutos";
import Rodape from "./compontens/Rodape/index";
import HeaderRestaurante from "./compontens/HeaderDeRestaurante";
import Banner from "./compontens/Banner";
import CardapioRestaurante from "./compontens/CardapioRestaurante";

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
