import './Project.scss';
import React from 'react';
import { withRouter } from 'react-router';
import RichTextRenderer from './RichTextRenderer';
import ProjectBanners from './ProjectBanners';
import SingleImageAsset from './SingleImageAsset';
import ProjectClient from './ProjectClient';

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
    const matchedProjectItems = projects.data.items.filter(
      currentProject => currentProject.fields.canonicalUrl === currentProjectUrl
    );
    const matchedProject = matchedProjectItems[0];
    const matchedClient = matchedProject.fields.client.sys.id;
    const richTextDocument = matchedProject.fields.projectDescription;
    return (
      <main className="project-page">
        <div className="spotlight">
          <SingleImageAsset
            imageArray={projects.data.includes}
            imageId={matchedProject.fields.projectMainImage.sys.id}
          />
          <div className="spotlight-overlay"></div>
          <div className="spotlight-text">
            <h1>{matchedProject.fields.projectName}</h1>
            <h2>Agency - {matchedProject.fields.agency}</h2>
            <ProjectClient
              clientArray={projects.data.includes}
              clientId={matchedClient}
            />
            <h3>Roles - {matchedProject.fields.roles}</h3>
          </div>
        </div>
        <RichTextRenderer
          projects={projects}
          richTextDocument={richTextDocument}
        />
        {matchedProject.fields.addBanners === true && (
          <ProjectBanners matchedProject={matchedProject} />
        )}
      </main>
    );
  } else {
    return <div>Loading</div>;
  }
};
export default withRouter(Project);
