import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Restaurante from "./pages/Restaurantes";


const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/:tipoRestaurante',
    element:
      <>
        <Restaurante/>
      </>
  },
])

export default Rotas
