import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';


import { EstiloGlobal, } from './styles';

import Rotas from './rotas'
import React from 'react';
import { store } from './store';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ClosingMessaage from './components/MensagemFinal';

function App() {
  return (
    <>
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={Rotas} />
      <Cart/>
      <Checkout />
      <ClosingMessaage/>
    </Provider>
    </>
  );
}




export default App;
