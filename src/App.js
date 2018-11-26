import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Layout} from './components/Layout';
import {Dashboard, Palettes, Reports, Zones} from './components/Pages'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/palettes" component={Palettes} />
            <Route path="/zones" component={Zones} />
            <Route path="/reports" component={Reports} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
