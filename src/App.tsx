import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import { EstiloGlobal, } from './styles';

import Rotas from './rotas'
import React from 'react';

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
