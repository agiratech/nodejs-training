import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//The <BrowserRouter> should be used when you have a server that will
// handle dynamic requests (knows how to respond to any possible URI)
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};
export default App;