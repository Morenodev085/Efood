import { createBrowserRouter } from "react-router-dom";
import Rodape from "./components/Rodape/index";
import HeaderRestaurante from "./components/HeaderDeRestaurante";
import Banner from "./components/Banner";
import CardapioRestaurante from "./components/CardapioRestaurante";
import React from "react";
import Home from "./pages/Home";
import Restaurante from "./pages/Restaurantes";


const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/restaurante/:id',
    element:
    <>
      <Restaurante/>
    </>
  },
])

export default Rotas
