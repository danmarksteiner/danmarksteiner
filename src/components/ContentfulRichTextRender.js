import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const ContentfulRichTextRender = ({ document, options }) => {
  const returnedHTML = documentToHtmlString(document, options);
  return returnedHTML;
};

// const document = {
//   nodeType: 'document',
//   data: {},
//   content: [
//     {
//       nodeType: 'paragraph',
//       data:{},
//       content: [
//         {
//           nodeType: 'text',
//           value: 'Hello',
//           marks: [{ type: 'bold' }],
//           data: {}
//         },
//         {
//           nodeType: 'text',
//           value: ' world!',
//           marks: [{ type: 'italic' }]
//           data: {}
//         },
//       ],
//     },
//   ]
// };

// const options = {
//   renderMark: {
//     [MARKS.BOLD]: text => `<custom-bold>${text}<custom-bold>`
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, next) => `<custom-paragraph>${next(node.content)}</custom-paragraph>`
//   }
// }

export default ContentfulRichTextRender;
