import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getContent } from '../api/getContent';

import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Project from './Project';
import ProjectsList from './ProjectsList';
import FeaturedSkills from './FeaturedSkills';
import ContactForm from './ContactForm';

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
    const projects = this.state.projects;
    const featuredSkills = this.state.featuredSkills;
    return (
      <div className="App">
        <main className="App__main">
          <Router>
            <ScrollToTop />
            <Route exact path="/">
              <Header />
            </Route>
            <Switch>
              <Route
                path="/projects"
                component={() => <Project projects={projects} />}
              />
              <Route exact path="/">
                <ProjectsList projects={projects} />
                <FeaturedSkills featuredSkills={featuredSkills} />
              </Route>
              />
            </Switch>
          </Router>
          <ContactForm />
          <div className="contact-me">
            <button>Contact</button>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
