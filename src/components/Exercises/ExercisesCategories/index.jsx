import React from 'react';
import {
  ExercisesItem,
  ExercisesList,
  StyledLink,
} from './ExercisesCategories.styled';

const ExercisesCategories = ({ activeCategory }) => {
  return (
    <div>
      <ExercisesList>
        <ExercisesItem>
          <StyledLink
            to="/exercises/bodyParts"
            className={activeCategory === 'bodyParts' ? 'active' : ''}
          >
            Body parts
          </StyledLink>
        </ExercisesItem>
        <ExercisesItem>
          <StyledLink
            to="/exercises/muscles"
            className={activeCategory === 'muscles' ? 'active' : ''}
          >
            Muscles
          </StyledLink>
        </ExercisesItem>
        <ExercisesItem>
          <StyledLink
            to="/exercises/equipment"
            className={activeCategory === 'equipment' ? 'active' : ''}
          >
            Equipment
          </StyledLink>
        </ExercisesItem>
      </ExercisesList>
    </div>
  );
};

export default ExercisesCategories;
