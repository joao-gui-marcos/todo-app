import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import { TaskProvider } from './context/taskContext';

import ItemList from './components/ItemList';
import ItemAdd from './components/ItemAdd';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <span><h2>ToDo List App</h2></span>
          <Switch>
            <TaskProvider>
              <Route exact={true} path="/">
                <ItemAdd />
                <ItemList />
              </Route>
            </TaskProvider>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
