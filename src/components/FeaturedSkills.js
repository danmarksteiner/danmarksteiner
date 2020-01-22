import './FeaturedSkills.scss';
import React from 'react';
import SingleImageAsset from './SingleImageAsset';
/**
 * Returns a JSX template layout iterating over the featuredSkills content type from the Contentful CDN
 * Each featuredSkills is presented using the SingleImageAsset nested component being passed details of each individual iterated featuredSkill
 * @FeaturedSkills
 * @param {object} featuredSkills - The complete featuredSkills object from Contentfuls CDN passed down as props
 * @returns {JSX.Element} - Returns a JSX template of an unordered list containing thumbnails for each entry to the featuredSkills content type
 */
const FeaturedSkills = ({ featuredSkills }) => {
  if (featuredSkills) {
    return (
      <section className="featured-skills">
        <h2>Skills</h2>
        <ul>
          {featuredSkills.data.items.map(featuredSkill => (
            <li key={featuredSkill.sys.id}>
              <SingleImageAsset
                imageArray={featuredSkills.data.includes}
                imageId={featuredSkill.fields.skillIcon.sys.id}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default FeaturedSkills;
