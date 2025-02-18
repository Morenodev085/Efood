import React from 'react';
import { EstiloGlobal, Container } from './styles';
import Header from './compontens/hader';

function App() {
  return (
    <Container className="App">
      <EstiloGlobal />
      <Header />
    </Container>
  );
}

export default App;
