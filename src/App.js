import './App.css';
import { Barra } from './components/Barra';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Barra/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
