import React from 'react';
import ExercisesItem from '../ExercisesItem';
import ExercisesListStyled from './ExercisesListStyled';

function ExercisesList({ exercisesArray }) {
  return (
    <ExercisesListStyled>
      {exercisesArray.map(exercise => {
        return (
          <ExercisesItem exerciseData={exercise} key={exercise.idExercise} />
        );
      })}
    </ExercisesListStyled>
  );
}

export default ExercisesList;
