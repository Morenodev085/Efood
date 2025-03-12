import { RouterProvider } from 'react-router-dom';

import { EstiloGlobal, } from './styles';

import Rotas from './rotas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <RouterProvider router={Rotas} />
    </>
  );
}



// caro corretor, enviei a minha duvida mas consegui corrigila antes da sua
// resposta, mas estou com probleams nas imagens na pagina assets que nao
// aparecem de forma nenhumacomo pode ver estou usansdo apeans palceholder no
// lugar de imagens
export default App;
