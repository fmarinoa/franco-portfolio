import './App.css';
import { Barra } from './components/Barra';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Barra/>
      <Banner/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
