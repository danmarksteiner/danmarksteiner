import './ProjectCarousel.scss';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SingleImageAsset from './SingleImageAsset';

const ProjectCarousel = ({ projectImages, imageArray }) => {
  return (
    <Carousel fade={true} interval={3000}>
      {projectImages.map(image => (
        <Carousel.Item key={image.sys.id}>
          <SingleImageAsset imageArray={imageArray} imageId={image.sys.id} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
