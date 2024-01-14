import React from 'react';
import {
  ExercisesItem,
  ExercisesList,
  LinkButton,
} from './ExercisesCategories.styled';

const ExercisesCategories = ({ activeFilter, handleActiveFilter }) => {
  return (
    <div>
      <ExercisesList>
        <ExercisesItem>
          <LinkButton
            className={activeFilter === 'bodyparts' ? 'active' : ''}
            onClick={() => handleActiveFilter('bodyparts')}
          >
            Body parts
          </LinkButton>
        </ExercisesItem>
        <ExercisesItem>
          <LinkButton
            className={activeFilter === 'muscles' ? 'active' : ''}
            onClick={() => handleActiveFilter('muscles')}
          >
            Muscles
          </LinkButton>
        </ExercisesItem>
        <ExercisesItem>
          <LinkButton
            className={activeFilter === 'equipment' ? 'active' : ''}
            onClick={() => handleActiveFilter('equipment')}
          >
            Equipment
          </LinkButton>
        </ExercisesItem>
      </ExercisesList>
    </div>
  );
};

export default ExercisesCategories;
