import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SingleImageAsset from './SingleImageAsset';

const RichTextRenderer = ({ projects, richTextDocument }) => {
  console.log(richTextDocument);
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: node => (
        <SingleImageAsset
          imageArray={projects.data.includes}
          imageId={node.data.target.sys.id}
        />
      )
    }
  };
  return (
    <article>{documentToReactComponents(richTextDocument, options)}</article>
  );
};
export default RichTextRenderer;
