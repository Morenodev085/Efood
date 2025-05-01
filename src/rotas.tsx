import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Cabecalho";
import ListaDeProdutos from "./components/ListaProdutos";
import Rodape from "./components/Rodape/index";
import HeaderRestaurante from "./components/HeaderDeRestaurante";
import Banner from "./components/Banner";
import CardapioRestaurante from "./components/CardapioRestaurante";
import React from "react";
import Home from "./pages/Home";

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/italiana',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante restaurante={restaurantes} />
        <Rodape />
      </>
  },
  {
    path: '/árabe',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante restaurante={restaurantes} />
        <Rodape />
      </>
  },
  {
    path: '/japonês',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante restaurante={restaurantes} />
        <Rodape />
      </>
  },
  {
    path: '/português',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante restaurante={restaurantes} />
        <Rodape />
      </>
  },
  {
    path: '/pizzaria',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante restaurante={restaurantes} />
        <Rodape />
      </>
  },
  {
    path: '/vegano',
    element:
      <>
        <HeaderRestaurante />
        <Banner />
        <CardapioRestaurante restaurante={restaurantes} />
        <Rodape />
      </>
  }
])

export default Rotas
