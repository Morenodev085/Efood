import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './compontens/header';
import ListaDeProdutos from './compontens/listaProdutos';
import RodaPe from './compontens/rodape';
import { EstiloGlobal, } from './styles';

const rotas = createBrowserRouter([
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

      </>
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </>
  );
}


// caro corretor, enviei a minha duvida mas consegui corrigila antes da sua
// resposta, mas estou com probleams nas imagens na pagina assets que nao
// aparecem de forma nenhumacomo pode ver estou usansdo apeans palceholder no
// lugar de imagens
export default App;
