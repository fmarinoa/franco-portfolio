import './App.css';
import { Barra } from './components/Barra';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Barra/>
      <Banner/>
    </div>
  );
}

export default App;
