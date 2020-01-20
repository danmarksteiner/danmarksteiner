import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ThumbnailImage from './ThumbnailImage';

class ProjectThumbnail extends Component {
  render() {
    return (
      <ul>
        {this.props.projects.data.items.map(project => (
          <li key={project.sys.id}>
            <Link
              to={`/projects/${project.fields.projectName
                .replace(/\W+/g, '-')
                .toLowerCase()}`}
            >
              {project.fields.projectName}
              <ThumbnailImage
                thumbnails={this.props.projects.data.includes}
                thumbnailId={project.fields.thumbnailImage.sys.id}
              />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProjectThumbnail;
