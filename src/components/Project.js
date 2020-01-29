import './Project.scss';
import React from 'react';
import { withRouter } from 'react-router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import Iframe from 'react-iframe';
import SingleImageAsset from './SingleImageAsset';

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
    const matchedProjectDescription = documentToHtmlString(
      matchedProject[0].fields.projectDescription
    );

    return (
      <main className="project-page">
        <div className="spotlight">
          <SingleImageAsset
            imageArray={projects.data.includes}
            imageId={matchedProject[0].fields.projectMainImage.sys.id}
          />
          <div className="spotlight-overlay"></div>
          <div className="spotlight-text">
            <h1>{matchedProject[0].fields.projectName}</h1>
            <h2>Agency - {matchedProject[0].fields.agency}</h2>
            <h3>Roles - {matchedProject[0].fields.roles}</h3>
          </div>
        </div>
        <article
          dangerouslySetInnerHTML={{ __html: matchedProjectDescription }}
        ></article>
        {/* <Iframe
          url="http://localhost:3000/banners/300x250/index.html"
          width="300px"
          height="250px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        /> */}
      </main>
    );
  } else {
    return <div>Loading</div>;
  }
};
export default withRouter(Project);
