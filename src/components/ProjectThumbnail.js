import React from 'react';
import { Link } from 'react-router-dom';
import SingleImageAsset from './SingleImageAsset';

const ProjectThumbnail = ({ projects, project }) => {
  return (
    <Link to={`/projects/${project.fields.canonicalUrl}`}>
      {/* {project.fields.projectName} */}
      <SingleImageAsset
        imageArray={projects.data.includes}
        imageId={project.fields.thumbnailImage.sys.id}
      />
    </Link>
  );
};

export default ProjectThumbnail;
