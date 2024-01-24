import { useState } from 'react';
import ExercisesItemStyled from './ExercisesItemStyled';
import sprite from '../../../images/sprite.svg';
import BasicModalWindow from '../../Modal';
import { AddExerciseForm } from '../../Modal/AddExerciseForm';
import { SuccessExerciseModalWindow } from 'components/Modal/AddPExerciseSuccess';
import addIdForPathname from 'helpers/addIdForPathname';
import deleteIdForPathname from 'helpers/deleteIdForPathname';

function ExercisesItem({ exerciseData }) {
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [dataSuccess, setDataSuccess] = useState(null);
  const { bodyPart, name, target, burnedCalories, idExercise } = exerciseData;

  const upFirst = string => {
    if (!string) return string;

    return string[0].toUpperCase() + string.slice(1);
  };

  const openModal = () => {
    setModal(preModal => {
      return !preModal;
    });
  };

  const closeModal = () => {
    setModal(false);
    deleteIdForPathname(idExercise);
  };

  const closeSuccessModal = () => {
    setSuccessModal(false);
    deleteIdForPathname(idExercise);
  };

  const handleSuccessModal = data => {
    setDataSuccess(data);
    setSuccessModal(true);
  };

  return (
    <ExercisesItemStyled>
      <p className="workout">WORKOUT</p>
      <button
        className="btn-box"
        onClick={() => {
          openModal();
          addIdForPathname(idExercise);
        }}
      >
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
      {modal && (
        <BasicModalWindow isOpenModalToggle={closeModal}>
          <AddExerciseForm
            data={exerciseData}
            onClick={openModal}
            openSuccess={handleSuccessModal}
          />
        </BasicModalWindow>
      )}
      {successModal && (
        <BasicModalWindow isOpenModalToggle={closeSuccessModal}>
          <SuccessExerciseModalWindow
            data={dataSuccess}
            closeModal={closeSuccessModal}
          />
        </BasicModalWindow>
      )}
    </ExercisesItemStyled>
  );
}

export default ExercisesItem;
