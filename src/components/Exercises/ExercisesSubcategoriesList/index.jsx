import React from 'react';

import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem';
import { SubCategoriesList } from './ExercisesSubcategoriesList.styled';

const ExercisesSubcategoriesList = () => {
  return (
    <div>
      <SubCategoriesList>
        <ExercisesSubcategoriesItem />
      </SubCategoriesList>
    </div>
  );
};

export default ExercisesSubcategoriesList;
