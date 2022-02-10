import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPart from './Components/SearchPart.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Region from './Region';
import AboutPerRegion from './AboutPerRegion';
import SearchByName from './SearchByName';

// <SearchPart/>
function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route path="/" exact component={SearchPart}/>
              <Route path="/about" component={About}/>
              <Route path="/region" component={Region}/>
              <Route path="/aboutperregion" component={AboutPerRegion}/>
              <Route path="/searchbyname" component={SearchByName}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
