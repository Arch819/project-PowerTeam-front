import React from 'react';
import {
  ExercisesItem,
  ExercisesList,
  LinkButton,
} from './ExercisesCategories.styled';

const ExercisesCategories = () => {
  return (
    <div>
      <ExercisesList>
        <ExercisesItem>
          <LinkButton className="active">Body parts</LinkButton>
        </ExercisesItem>
        <ExercisesItem>
          <LinkButton>Muscles</LinkButton>
        </ExercisesItem>
        <ExercisesItem>
          <LinkButton>Equipment</LinkButton>
        </ExercisesItem>
      </ExercisesList>
    </div>
  );
};

export default ExercisesCategories;
