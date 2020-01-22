import React from 'react';
import { withRouter } from 'react-router';
/**
 * Returns a JSX template layout with the selected project taken from the canonical URL navigated to.
 * @Project
 * @param {object} projects - The complete projects object from Contentfuls CDN passed down as props
 * @param {object} location - The location object passed down as props from React Router
 * @returns {JSX.Element}  - Returns a JSX template with the matching project
 */
const Project = ({ projects, location }) => {
  if (projects) {
    const currentProjectUrl = location.pathname.substring(
      location.pathname.lastIndexOf('/') + 1
    );
    const matchedProject = projects.data.items.filter(
      currentProject => currentProject.fields.canonicalUrl === currentProjectUrl
    );
    return <h1>{matchedProject[0].fields.projectName}</h1>;
  } else {
    return <div>Loading</div>;
  }
};
export default withRouter(Project);
