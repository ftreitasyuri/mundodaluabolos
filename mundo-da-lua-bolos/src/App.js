import './App.css';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Destaque from './components/Destaques';
import Rodape from './components/Rodape';
function App() {
  return (
    <div className="App">
      <div id="containerPrincipal">
        
        <div id="cabecalho">
        <Cabecalho />
        </div>
          
        <div id="corpo">
        <Corpo />
        </div>
        <hr />
        <div id="destaque">
        <Destaque/>
        </div>

        <div id="rodape">
        <Rodape />
        </div>

         
        
      </div>
    </div>
  );
}

export default App;
