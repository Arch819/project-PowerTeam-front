import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Section from 'components/Section';
import {
  Icon,
  LinkBack,
  LinkBox,
  TitleBox,
} from 'page/ExercisesListPage/ExercisesListPage.styled';
import sprite from '../../images/sprite.svg';

import BasicModalWindow from 'components/Modal';
import { AddExerciseForm } from 'components/Modal/AddExerciseForm';
import { SuccessExerciseModalWindow } from 'components/Modal/AddPExerciseSuccess';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercisesId } from 'store/exercises/exercisesSelector';
import { getExercisesId } from 'store/exercises/exercisesOperations';
import TitlePage from 'components/TitlePage';

function ExerciseItemPage() {
  const { exId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const newPath = location.pathname.replace(new RegExp(`/${exId}.*$`), '');

  const backLinkHref = location.state?.from ?? newPath;
  const ref = useRef(backLinkHref);

  const [successModal, setSuccessModal] = useState(false);
  const [dataSuccess, setDataSuccess] = useState(null);
  const exerciseData = useSelector(selectExercisesId);

  useEffect(() => {
    dispatch(getExercisesId(exId));
  }, [exId, dispatch]);

  const tumblerSuccessModal = () => {
    setSuccessModal(preSuccessModal => {
      return !preSuccessModal;
    });
  };

  const handleSuccessModal = data => {
    setDataSuccess(data);
  };

  return (
    <Section className="exercises-bg" use={'first'}>
      {exerciseData && (
        <div className="container">
          <LinkBox>
            <LinkBack to={ref.current} aria-label="Go to exercise` list">
              <Icon>
                <use href={`${sprite}#${'icon-back'}`} />
              </Icon>
              Back
            </LinkBack>
          </LinkBox>
          <TitleBox>
            <TitlePage title={'Exercise'} />
          </TitleBox>

          <AddExerciseForm
            data={exerciseData}
            onClick={tumblerSuccessModal}
            openSuccess={handleSuccessModal}
          />
          {successModal && (
            <BasicModalWindow isOpenModalToggle={tumblerSuccessModal}>
              <SuccessExerciseModalWindow
                data={dataSuccess}
                closeModal={tumblerSuccessModal}
                pathBack={newPath}
              />
            </BasicModalWindow>
          )}
        </div>
      )}
    </Section>
  );
}

export default ExerciseItemPage;
