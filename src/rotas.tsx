import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Cabecalho";
import ListaDeProdutos from "./components/ListaProdutos";
import Rodape from "./components/Rodape/index";
import HeaderRestaurante from "./components/HeaderDeRestaurante";
import Banner from "./components/Banner";
import CardapioRestaurante from "./components/CardapioRestaurante";
import React from "react";

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
