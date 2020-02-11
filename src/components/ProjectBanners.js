import './ProjectBanners.scss';
import React from 'react';
import Iframe from 'react-iframe';
const ProjectBanners = ({ matchedProject }) => {
  const canonicalUrl = matchedProject.fields.canonicalUrl;
  return (
    <div className="project-page-banners">
      {matchedProject.fields.bannerDmpu === true && (
        <Iframe
          url={`http://localhost:3000/banners/${canonicalUrl}/300x600/index.html`}
          width="300px"
          height="600px"
          id="myId"
          className="project-banner-dmpu"
          display="initial"
          position="relative"
        />
      )}
      {matchedProject.fields.bannerMpu === true && (
        <Iframe
          url={`http://localhost:3000/banners/${canonicalUrl}/300x250/index.html`}
          width="300px"
          height="250px"
          id="myId"
          className="project-banner-mpu"
          display="initial"
          position="relative"
        />
      )}
      {matchedProject.fields.bannerSkyscraper === true && (
        <Iframe
          url={`http://localhost:3000/banners/${canonicalUrl}/160x600/index.html`}
          width="160px"
          height="600px"
          id="myId"
          className="project-banner-skyscraper"
          display="initial"
          position="relative"
        />
      )}
      {matchedProject.fields.bannerLeaderboard === true && (
        <Iframe
          url={`http://localhost:3000/banners/${canonicalUrl}/728x90/index.html`}
          width="728px"
          height="90px"
          id="myId"
          className="project-banner-leaderboard"
          display="initial"
          position="relative"
        />
      )}
      {matchedProject.fields.bannerBillboard === true && (
        <Iframe
          url={`http://localhost:3000/banners/${canonicalUrl}/970x250/index.html`}
          width="970px"
          height="250px"
          id="myId"
          className="project-banner-billboard"
          display="initial"
          position="relative"
        />
      )}
    </div>
  );
};
export default ProjectBanners;
