import Section from 'components/Section';
import ExercisesCategories from 'components/Exercises/ExercisesCategories';
import ExercisesSubcategoriesList from 'components/Exercises/ExercisesSubcategoriesList';
import TitlePage from 'components/TitlePage';
import { NavBox } from './ExercisesPage.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercisesFilters } from 'store/exercises/exercisesSelector';
import { selectError, selectIsLoading } from 'store/appState/selectors';
import { getExercisesFilters } from 'store/exercises/exercisesOperations';

function ExercisesPage() {
  const exercisesFilters = useSelector(selectExercisesFilters);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [subcategoriesList, setSubcategoriesList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      navigate('/exercises/bodyPart', { replace: true });
    }
    dispatch(getExercisesFilters());
  }, [category, dispatch, navigate]);

  const gedListByFilter = useCallback(() => {
    const filterValid = {
      bodyPart: 'Body parts',
      target: 'Muscles',
      equipment: 'Equipment',
    };
    const subCategoriesToRender = exercisesFilters.filter(
      item => item.filter === filterValid[category]
    );
    setSubcategoriesList(subCategoriesToRender);
  }, [category, exercisesFilters]);

  useEffect(() => {
    gedListByFilter();
  }, [gedListByFilter, exercisesFilters]);

  return (
    <Section>
      <div className="container">
        <NavBox>
          <TitlePage title={'Exercises'} />
          <ExercisesCategories activeCategory={category} />
        </NavBox>

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
        {subcategoriesList.length > 0 && (
          <ExercisesSubcategoriesList
            subcategoriesList={subcategoriesList}
            category={category}
          />
        )}
      </div>
    </Section>
  );
}

export default ExercisesPage;
