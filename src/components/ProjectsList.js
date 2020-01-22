import './ProjectsList.scss';
import React from 'react';
import ProjectThumbnail from './ProjectThumbnail';
/**
 * Returns a JSX template layout iterating over the projects content type from the Contentful CDN
 * Each project is presented using the Project Thumbnail nested component being passed details of each individual iterated project
 * @ProjectsList
 * @param {object} projects - The complete projects object from Contentfuls CDN passed down as props
 * @returns {JSX.Element} - Returns a JSX template of an unordered list containing thumbnails and links for each entry to the projects content type
 */
const ProjectsList = ({ projects }) => {
  if (projects) {
    return (
      <section className="projects-list">
        <ul>
          {projects.data.items.map(project => (
            <li key={project.sys.id}>
              <ProjectThumbnail projects={projects} project={project} />
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return <section className="projects-list">Loading</section>;
  }
};
export default ProjectsList;
