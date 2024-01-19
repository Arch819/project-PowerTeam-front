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
            to="/exercises/bodyPart"
            className={activeCategory === 'bodyPart' ? 'active' : ''}
          >
            Body parts
          </StyledLink>
        </ExercisesItem>
        <ExercisesItem>
          <StyledLink
            to="/exercises/target"
            className={activeCategory === 'target' ? 'active' : ''}
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
