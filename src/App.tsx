import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';


import { EstiloGlobal, } from './styles';

import Rotas from './rotas'
import React from 'react';
import { store } from './store';
import Cart from './components/Cart';
import ItemDoMenu from './pages/Home/index';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={Rotas} />
      <Cart/>
      <Checkout />
    </Provider>
    </>
  );
}




export default App;
