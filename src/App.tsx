import Header from './compontens/header';
import ListaDeProdutos from './compontens/listaProdutos';
import { EstiloGlobal, } from './styles';



function App() {
  return (
    <>
    <EstiloGlobal />
    <div>
      <Header />
      <ListaDeProdutos />
    </div>
    </>
  );
}


// caro corretor, enviei a minha duvida mas consegui corrigila antes da sua
// resposta, mas estou com probleams nas imagens na pagina assets que nao
// aparecem de forma nenhumacomo pode ver estou usansdo apeans palceholder no
// lugar de imagens
export default App;
