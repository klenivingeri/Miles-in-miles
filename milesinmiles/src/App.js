import { Counter } from "./components/Repository/Counter";
import { Repository } from "./pages/Repository";
import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <>
      <Repository />
      <Counter />
      </> 
    </div>
  );
}

export default App;
