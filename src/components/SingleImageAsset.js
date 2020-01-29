import './SingleImageAsset.scss';
import React from 'react';
/**
 * Filters out a single image from the ID supplied in Contenfuls reference ID's and returns and image tag
 * This is to be used when there is a single defined media type with one entry such as thumbnails or main image
 * @SingleImageAsset
 * @param {array} imageArray - The array of includes taken from data.includes in Contenfuls JSON response of the content type
 * @param {string} imageId - The image ID used as a reference to get the correct image. Can be gained from sys.id in the fields of the image item in Contenfuls JSON response
 * @returns {JSX.Element} - Returns an image tag with the correct matched image file URL and the matching field of description to be used as an alt tag
 */
const SingleImageAsset = ({ imageArray, imageId }) => {
  const matchedImage = imageArray.Asset.filter(
    currentImage => currentImage.sys.id === imageId
  );
  return (
    <img
      src={matchedImage[0].fields.file.url}
      alt={matchedImage[0].fields.description}
    />
  );
};
export default SingleImageAsset;
