import React from 'react';
import {
  ExercisesItem,
  ExercisesList,
  LinkButton,
} from './ExercisesCategories.styled';

const ExercisesCategories = ({ activeCategory, handleCategory }) => {
  return (
    <div>
      <ExercisesList>
        <ExercisesItem>
          <LinkButton
            className={activeCategory === 'Body parts' ? 'active' : ''}
            onClick={e => handleCategory('Body parts')}
          >
            Body parts
          </LinkButton>
        </ExercisesItem>
        <ExercisesItem>
          <LinkButton
            className={activeCategory === 'Muscles' ? 'active' : ''}
            onClick={e => handleCategory('Muscles')}
          >
            Muscles
          </LinkButton>
        </ExercisesItem>
        <ExercisesItem>
          <LinkButton
            className={activeCategory === 'Equipment' ? 'active' : ''}
            onClick={e => handleCategory('Equipment')}
          >
            Equipment
          </LinkButton>
        </ExercisesItem>
      </ExercisesList>
    </div>
  );
};

export default ExercisesCategories;
