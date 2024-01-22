import Section from 'components/Section';
import React, { useEffect, useRef } from 'react';
import sprite from '../../images/sprite.svg';
import ExercisesList from 'components/Exercises/ExercisesList';
import ExercisesCategories from 'components/Exercises/ExercisesCategories';
import { Icon, LinkBack, LinkBox, TitleBox } from './ExercisesListPage.styled';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercises } from 'store/exercises/exercisesSelector';
import { getAllExercises } from 'store/exercises/exercisesOperations';
import TitlePage from 'components/TitlePage';

function ExercisesListPage() {
  const exercises = useSelector(selectExercises);

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
    <Section className="exercises-bg" use={'first'}>
      <div className="container">
        <LinkBox>
          <LinkBack to={ref.current}>
            <Icon>
              <use href={`${sprite}#${'icon-back'}`} />
            </Icon>
            Back
          </LinkBack>
        </LinkBox>
        <TitleBox>
          <TitlePage title={capitalizedWord(subcategory)} />
          <ExercisesCategories activeCategory={category} />
        </TitleBox>
        {exercises.length > 0 && <ExercisesList exercisesArray={exercises} />}
      </div>
    </Section>
  );
}

export default ExercisesListPage;
