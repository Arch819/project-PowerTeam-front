import Section from 'components/Section';
import React, { useEffect, useRef } from 'react';
import sprite from '../../images/sprite.svg';
import ExercisesList from 'components/Exercises/ExercisesList';
import ExercisesCategories from 'components/Exercises/ExercisesCategories';
import { Icon, LinkBack, TitleBox } from './ExercisesListPage.styled';
import { useLocation, useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercises } from 'store/exercises/exercisesSelector';
import { getAllExercises } from 'store/exercises/exercisesOperations';
import { selectError, selectIsLoading } from 'store/appState/selectors';
import TitlePage from 'components/TitlePage';

function ExercisesListPage() {
  const exercises = useSelector(selectExercises);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { category, subcategory } = useParams();

  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/exercises';
  const ref = useRef(backLinkHref);

  useEffect(() => {
    dispatch(getAllExercises({ category, subcategory }));
  }, [category, dispatch, subcategory]);

  const capitalizedWord = word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  };

  return (
    <Section className="exercises-bg" $use={'first'}>
      <div className="container">
        <LinkBack to={ref.current}>
          <Icon>
            <use href={`${sprite}#${'icon-back'}`} />
          </Icon>
          Back
        </LinkBack>
        <TitleBox>
          <TitlePage title={capitalizedWord(subcategory)} />
          <ExercisesCategories activeCategory={category} />
        </TitleBox>
        {isLoading && !error && (
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#E6533C"
            ariaLabel="oval-loading"
            wrapperStyle={{
              display: 'block',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
            wrapperClass=""
          />
        )}
        {exercises.length > 0 && <ExercisesList exercisesArray={exercises} />}
      </div>
    </Section>
  );
}

export default ExercisesListPage;
