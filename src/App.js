import './App.css';
import {Header} from './components';
import {Home,Active} from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StoreProvider from './control-data/context';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <StoreProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/active">
            <Active />
          </Route>
        </Switch>
      </StoreProvider>
      </Router>
    </div>
  );
}

export default App;
