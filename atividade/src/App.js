import logo from './logo.svg';
import './App.css';
import bolsa from "./img/bolsinha.png"
import vestido from "./img/vestidin.png"
import salto from "./img/saltinho.png"

function App() {
  return (
    <div className="App">

     <h1>Hi, Barbie</h1>
     <h1 className="emoji_grande">👸🏼💅🏼💋</h1>

     <p>Clique no emoji para exibir o nome dele</p>
     <img  src={bolsa} alt='Bolsa rosa'title='Bolsa' height='40px' width='40px' hspace='20px'></img>
     <img src={vestido} alt='Vestido rosa'title='Vestido' height='40px' width='40px' hspace='20px'></img>
     <img src={salto} alt='Salto rosa'title='Salto' height='40px' width='40px' hspace='20px'></img>

    </div>
  );
}

export default App;
