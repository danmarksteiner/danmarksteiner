import './ProjectsList.scss';
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
      return (
        <ul>
          {this.props.projects.data.items.map(project => (
            <li key={project.sys.id}>
              <ProjectThumbnail
                projects={this.props.projects}
                project={project}
              />
            </li>
          ))}
        </ul>
      );
    }
    return <div>Loading</div>;
  }

  render() {
    return <section className="projects-list">{this.renderContent()}</section>;
  }
}

export default ProjectsList;
