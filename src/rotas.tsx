import { createBrowserRouter } from "react-router-dom";
import Header from "./compontens/header";
import ListaDeProdutos from "./compontens/listaProdutos";
import RodaPe from "./compontens/Rodape";
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
        <RodaPe />
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
        <RodaPe />
      </>
  },
  {
    path: '/árabe',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <RodaPe />
      </>
  },
  {
    path: '/japonês',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <RodaPe />
      </>
  },
  {
    path: '/português',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <RodaPe />
      </>
  },
  {
    path: '/pizzaria',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <RodaPe />
      </>
  },
  {
    path: '/vegano',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante />
        <RodaPe />
      </>
  }
])

export default Rotas
