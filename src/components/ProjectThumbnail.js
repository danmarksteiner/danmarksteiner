import React from 'react';
import { Link } from 'react-router-dom';
import SingleImageAsset from './SingleImageAsset';
/**
 * Filters out a single image from the ID supplied in Contenfuls reference ID's and returns and image tag
 * @ProjectThumbnail
 * @param {object} projects - The complete projects object from Contentfuls CDN passed down as props
 * @param {object} project - The individual project being iterated over in the Project List
 * @returns {JSX.Element} - Returns a thumbnail JSX element containing a Link to the project and a matching image thumbnail
 */
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
