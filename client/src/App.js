import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/saved/Saved';
import Quiz from './pages/Quiz';
import Home from './pages/Home/Home';
import Results from './pages/Results';
import Decks from './pages/Decks';
import UhOh404 from './pages/UhOh404';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/decks" component={Decks} />
          <Route component={UhOh404} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
