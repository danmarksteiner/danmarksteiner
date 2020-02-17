import './ProjectBanners.scss';
import React from 'react';
import SingleImageAsset from './SingleImageAsset';
import Iframe from 'react-iframe';
const ProjectBanners = ({ matchedProject, projects }) => {
  const canonicalUrl = matchedProject.fields.canonicalUrl;
  const responsiveBanner = () => {
    const moblie = window.matchMedia('(max-width: 767px)');
    if (moblie.matches) {
      return (
        <div className="project-page-banners">
          <SingleImageAsset
            imageArray={projects.data.includes}
            imageId={matchedProject.fields.mobileBanners.sys.id}
          />
        </div>
      );
    }
    return (
      <div className="project-page-banners">
        {matchedProject.fields.bannerDmpu === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/300x600/index.html`}
            width="300px"
            height="600px"
            className="project-banner-dmpu"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
        {matchedProject.fields.bannerMpu === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/300x250/index.html`}
            width="300px"
            height="250px"
            className="project-banner-mpu"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
        {matchedProject.fields.bannerSkyscraper === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/160x600/index.html`}
            width="160px"
            height="600px"
            className="project-banner-skyscraper"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
        {matchedProject.fields.bannerLeaderboard === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/728x90/index.html`}
            width="728px"
            height="90px"
            className="project-banner-leaderboard"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
        {matchedProject.fields.bannerBillboard === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/970x250/index.html`}
            width="970px"
            height="250px"
            className="project-banner-billboard"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
      </div>
    );
  };
  return <div>{responsiveBanner()}</div>;
};
export default ProjectBanners;
