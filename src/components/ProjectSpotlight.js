import './ProjectSpotlight.scss';
import React from 'react';
import SingleImageAsset from './SingleImageAsset';
import ProjectClient from './ProjectClient';

const ProjectSpotlight = ({ projects, matchedProject, clientArray }) => {
  const matchedClient = matchedProject.fields.client.sys.id;
  const spotlightImage = () => {
    const moblie = window.matchMedia('(max-width: 767px)');
    if (moblie.matches) {
      return (
        <SingleImageAsset
          imageArray={projects.data.includes}
          imageId={matchedProject.fields.mobileSpotlight.sys.id}
        />
      );
    }
    return (
      <SingleImageAsset
        imageArray={projects.data.includes}
        imageId={matchedProject.fields.projectMainImage.sys.id}
      />
    );
  };
  return (
    <div className="spotlight">
      {spotlightImage()}
      <div className="spotlight-overlay"></div>
      <div className="spotlight-text">
        <h1>{matchedProject.fields.projectName}</h1>
        <h2>Agency - {matchedProject.fields.agency}</h2>
        <ProjectClient clientArray={clientArray} clientId={matchedClient} />
        <h3>Roles - {matchedProject.fields.roles}</h3>
      </div>
    </div>
  );
};

export default ProjectSpotlight;
