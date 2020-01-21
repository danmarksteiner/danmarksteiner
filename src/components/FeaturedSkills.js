import './FeaturedSkills.scss';
import React from 'react';
import SingleImageAsset from './SingleImageAsset';

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
