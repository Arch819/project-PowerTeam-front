// ExercisesList містить список всіх вправ ExercisesItem, отриманих з backendу за відповідною підкатегорією.

import React from 'react';
import ExercisesItem from '../ExercisesItem';
import ExercisesListStyled from './ExercisesListStyled';

function ExercisesList({ exerciseName, activeFilter }) {
  const exercisesList = [
    {
      idExercise: '64f2458d6f67bc34bae4f7f7',
      bodyPart: 'chest',
      equipment: 'leverage machine',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
      name: 'assisted chest dip (kneeling)  ',
      target: 'pectorals',
      burnedCalories: 329,
      time: 3,
    },
    {
      idExercise: '64f2458d6f67bc34bae4f801',
      bodyPart: 'upper arms',
      equipment: 'leverage machine',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0019.gif',
      name: 'assisted triceps dip (kneeling) Barbell reverse preacher curl',
      target: 'triceps',
      burnedCalories: 233,
      time: 3,
    },
    {
      idExercise: '64f2458d6f67bc34bae4f813',
      bodyPart: 'upper arms',
      equipment: 'barbell',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0038.gif',
      name: 'barbell drag curl',
      target: 'biceps',
      burnedCalories: 84,
      time: 3,
    },
    {
      idExercise: '64f2458d6f67bc34bae4f7f7',
      bodyPart: 'chest',
      equipment: 'leverage machine',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
      name: 'assisted chest dip (kneeling)  ',
      target: 'pectorals',
      burnedCalories: 329,
      time: 3,
    },
    {
      idExercise: '64f2458d6f67bc34bae4f801',
      bodyPart: 'upper arms',
      equipment: 'leverage machine',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0019.gif',
      name: 'assisted triceps dip (kneeling)',
      target: 'triceps',
      burnedCalories: 233,
      time: 3,
    },
    {
      idExercise: '64f2458d6f67bc34bae4f813',
      bodyPart: 'upper arms',
      equipment: 'barbell',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0038.gif',
      name: 'barbell drag curl',
      target: 'biceps',
      burnedCalories: 84,
      time: 3,
    },
    {
      idExercise: '64f2458d6f67bc34bae4f7f4',
      bodyPart: 'waist',
      equipment: 'body weight',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0003.gif',
      name: 'air bike',
      target: 'abs',
      burnedCalories: 312,
      time: 3,
    },
    {
      idExercise: '64f2458d6f67bc34bae4f819',
      bodyPart: 'upper legs',
      equipment: 'barbell',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0044.gif',
      name: 'barbell good morning',
      target: 'hamstrings',
      burnedCalories: 335,
      time: 3,
    },
    {
      idExercise: '64f2458d6f67bc34bae4f7fe',
      bodyPart: 'upper legs',
      equipment: 'assisted',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0016.gif',
      name: 'assisted prone hamstring',
      target: 'hamstrings',
      burnedCalories: 316,
      time: 3,
    },
    {
      idExercise: '64f2458d6f67bc34bae4f809',
      bodyPart: 'upper legs',
      equipment: 'barbell',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0028.gif',
      name: 'barbell clean and press',
      target: 'quads',
      burnedCalories: 272,
      time: 3,
    },
  ];
  return (
    <ExercisesListStyled>
      {exercisesList.map(exercise => {
        return (
          <ExercisesItem exerciseData={exercise} key={exercise.idExercise} />
        );
      })}
    </ExercisesListStyled>
  );
}

export default ExercisesList;
