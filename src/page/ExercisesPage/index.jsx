import Section from 'components/Section';
import ExercisesCategories from 'components/Exercises/ExercisesCategories';
import ExercisesSubcategoriesList from 'components/Exercises/ExercisesSubcategoriesList';
import TitlePage from 'components/TitlePage';
import { NavBox, SwiperContainer } from './ExercisesPage.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercisesFilters } from 'store/exercises/exercisesSelector';
import { getExercisesFilters } from 'store/exercises/exercisesOperations';

function ExercisesPage() {
  const exercisesFilters = useSelector(selectExercisesFilters);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();

  const categoryValid = {
    bodyPart: 'Body parts',
    target: 'Muscles',
    equipment: 'Equipment',
  };
  const filter = encodeURIComponent(categoryValid[category]);

  useEffect(() => {
    if (!category) {
      navigate('/exercises/bodyPart', { replace: true });
    }
  }, [category, navigate]);

  useEffect(() => {
    if (category) {
      dispatch(getExercisesFilters(filter));
    }
  }, [category, dispatch, filter]);

  return (
    <Section>
      <SwiperContainer>
        <NavBox>
          <TitlePage title={'Exercises'} />
          <ExercisesCategories activeCategory={category} />
        </NavBox>
        {exercisesFilters.length > 0 && (
          <ExercisesSubcategoriesList
            subcategoriesList={exercisesFilters}
            category={category}
          />
        )}
      </SwiperContainer>
    </Section>
  );
}

export default ExercisesPage;
