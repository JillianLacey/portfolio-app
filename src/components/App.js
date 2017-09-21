import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import BaseLayout from '../container/BaseLayout';
import Home from '../container/Home';
import About from '../container/About';
import Portfolio from '../container/Portfolio';
import Contact from '../container/Contact';
import References from '../container/References';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/references' component={References} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/' component={Home} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
