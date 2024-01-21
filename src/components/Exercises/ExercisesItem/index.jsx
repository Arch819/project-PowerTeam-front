// ExercisesItem містить інформацію про вправу, а саме:
//  - назву вправи
//  - кількість калорій, яку буде спалено за 60 хвилин виконання вправи
//  - частину тіла, яка буде задіяна під час виконання вправи
//  - мʼязи, які буде вдосконалено в результаті виконання вправи
// Також ExercisesItem містить кнопку Start, що відкриває модальне вікно BasicModalWindow,  яке містить AddExerciseForm

import { useState } from 'react';
import ExercisesItemStyled from './ExercisesItemStyled';
import sprite from '../../../images/sprite.svg';
import BasicModalWindow from '../../Modal';

function ExercisesItem({ exerciseData }) {
  const [modal, setModal] = useState(false);
  const { bodyPart, name, target, burnedCalories } = exerciseData;

  const upFirst = string => {
    if (!string) return string;

    return string[0].toUpperCase() + string.slice(1);
  };

  const openModal = () => {
    setModal(preModal => {
      return !preModal;
    });
  };

  return (
    <ExercisesItemStyled>
      <p className="workout">WORKOUT</p>
      <button className="btn-box" onClick={openModal}>
        <span className="btn-text">Start</span>
        <svg className="btn-svg">
          <use href={`${sprite}#icon-next`} />
        </svg>
      </button>
      <div className="title-box">
        <div className="title-svg-route">
          <svg className="title-svg-person">
            <use href={`${sprite}#icon-running-stick-figure`} />
          </svg>
        </div>
        <h3 className="title-exercise">{upFirst(name)}</h3>
      </div>
      <ul className="categories-list">
        <li className="categories-item">
          <p className="category-name">Burned calories:</p>
          <span className="category-data">{burnedCalories}</span>
        </li>
        <li className="categories-item">
          <p className="category-name">Body part:</p>
          <span className="category-data">{upFirst(bodyPart)}</span>
        </li>
        <li className="categories-item">
          <p className="category-name">Target:</p>
          <span className="category-data">{upFirst(target)}</span>
        </li>
      </ul>
      {modal && <BasicModalWindow exerciseData={exerciseData} />}
    </ExercisesItemStyled>
  );
}

export default ExercisesItem;
