import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getProjects } from '../api/getProjects';

import Header from './Header';
import Project from './Project';
import ProjectsList from './ProjectsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }
  componentDidMount() {
    getProjects().then(projects => this.setState({ projects }));
  }
  render() {
    return (
      <div className="App">
        <main className="App__main">
          <Router>
            <Header />
            <Switch>
              <Route
                path="/projects"
                component={() => <Project projects={this.state.projects} />}
              />
              <Route
                exact
                path="/"
                component={() => (
                  <ProjectsList projects={this.state.projects} />
                )}
              />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
