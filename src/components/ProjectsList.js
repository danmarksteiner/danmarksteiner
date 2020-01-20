import React, { Component } from 'react';
import ProjectThumbnail from './ProjectThumbnail';

class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }

  renderContent() {
    if (this.props.projects) {
      return <ProjectThumbnail projects={this.props.projects} />;
    }

    return <div>Loading</div>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default ProjectsList;
