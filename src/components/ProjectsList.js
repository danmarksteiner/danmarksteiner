import React, { Component } from 'react';
import { getProjects } from '../api/getProjects';
import ProjectThumbnail from './ProjectThumbnail';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state = {
      projects: null
    };
  }

  componentDidMount() {
    getProjects().then(projects => this.setState({ projects }));
  }

  renderContent() {
    if (this.state.projects) {
      return <ProjectThumbnail projects={this.state.projects} />;
    }

    return <div>Loading</div>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default ProjectsList;
