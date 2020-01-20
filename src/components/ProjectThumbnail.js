import React from 'react';
import ThumbnailImage from './ThumbnailImage';

const ProjectThumbnail = props => {
  return (
    <ul>
      {props.projects.data.items.map(project => (
        <li key={project.sys.id}>
          {project.fields.projectName}
          <ThumbnailImage
            thumbnails={props.projects.data.includes}
            thumbnailId={project.fields.thumbnailImage.sys.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectThumbnail;
