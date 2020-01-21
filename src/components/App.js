import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getContent } from '../api/getContent';

import Header from './Header';
import Project from './Project';
import ProjectsList from './ProjectsList';
import FeaturedSkills from './FeaturedSkills';

class App extends Component {
  /**
   * @method constructor
   * @param {object} props - Component props.
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }
  componentDidMount() {
    getContent('project').then(projects => this.setState({ projects }));
    getContent('featuredSkills').then(featuredSkills =>
      this.setState({ featuredSkills })
    );
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
              <Route exact path="/">
                <ProjectsList projects={this.state.projects} />
                <FeaturedSkills featuredSkills={this.state.featuredSkills} />
              </Route>
              />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
