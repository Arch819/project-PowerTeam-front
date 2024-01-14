import React from 'react';

import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem';

const ExercisesSubcategoriesList = ({ handleExerciseName, subCategories }) => {
  return (
    <div>
      <ul>
        {subCategories.map(({ _id, filter, name, imgURL }) => (
          <ExercisesSubcategoriesItem
            key={_id}
            filter={filter}
            name={name}
            imgURL={imgURL}
            id={_id}
            handleExerciseName={handleExerciseName}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExercisesSubcategoriesList;
