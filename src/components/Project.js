import './Project.scss';
import React from 'react';
import { withRouter } from 'react-router';
import ProjectSpotlight from './ProjectSpotlight';
import RichTextRenderer from './RichTextRenderer';
import ProjectBanners from './ProjectBanners';
import ProjectCarousel from './ProjectCarousel';

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
    const richTextDocument = matchedProject.fields.projectDescription;
    const richTextDocumentFooter = matchedProject.fields.footerText;

    return (
      <main className="project-page">
        <ProjectSpotlight
          projects={projects}
          matchedProject={matchedProject}
          clientArray={projects.data.includes}
        />

        <RichTextRenderer
          projects={projects}
          richTextDocument={richTextDocument}
        />
        {matchedProject.fields.addBanners === true && (
          <ProjectBanners matchedProject={matchedProject} projects={projects} />
        )}
        {matchedProject.fields.showProjectBodyImages === true && (
          <ProjectCarousel
            projectImages={matchedProject.fields.projectBodyImages}
            imageArray={projects.data.includes}
          />
        )}
        <RichTextRenderer
          projects={projects}
          richTextDocument={richTextDocumentFooter}
        />
      </main>
    );
  } else {
    return <div>Loading</div>;
  }
};
export default withRouter(Project);
