import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import {Provider} from './context';

function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
    <Navbar />
     <Switch>
     <Route exact path="/" component={Home} />
     </Switch>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
