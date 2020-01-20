import React from 'react';
const ThumbnailImage = props => {
  const { thumbnails } = props;
  const matchedImage = thumbnails.Asset.filter(
    currentImage => currentImage.sys.id === props.thumbnailId
  );
  return (
    <img
      src={matchedImage[0].fields.file.url}
      alt={matchedImage[0].fields.description}
    />
  );
};

export default ThumbnailImage;
