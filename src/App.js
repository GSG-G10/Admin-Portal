import './App.css';
import {Header} from './components';
import {Home} from './pages';
import StoreProvider from './control-data/context';
function App() {
  return (
    <div className="App">
      <Header />
      <StoreProvider>
       <Home />
      </StoreProvider>
    </div>
  );
}

export default App;
