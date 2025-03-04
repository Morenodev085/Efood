import { createBrowserRouter } from "react-router-dom";
import Header from "./compontens/header";
import ListaDeProdutos from "./compontens/listaProdutos";
import RodaPe from "./compontens/rodape";
import HeaderRestaurante from "./compontens/header2";
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
    path: '/italiano',
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
