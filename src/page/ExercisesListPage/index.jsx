import Section from 'components/Section';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import sprite from '../../images/sprite.svg';
import ExercisesList from 'components/Exercises/ExercisesList';
import ExercisesCategories from 'components/Exercises/ExercisesCategories';
import { Icon, LinkBack, TitleBox } from './ExercisesListPage.styled';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

axios.defaults.baseURL = 'https://powerpulse-backend-heie.onrender.com/';

function ExercisesListPage() {
  const [exercisesArray, setExercisesArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category, subcategory } = useParams();
  console.log(category, subcategory);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/exercises';
  const ref = useRef(backLinkHref);

  const getExercisesArray = useCallback(async () => {
    try {
      // запит на бек
      setLoading(true);

      const response = await axios.get('/exercises');

      // const filterValid = {
      //   bodyParts: 'bodyPart',
      //   muscles: 'target',
      //   equipment: 'equipment',
      // };
      // const categoryValid = filterValid[category];

      const arrayToRender = response.data.filter(
        item => item[category].replaceAll(' ', '') === subcategory
      );
      setExercisesArray(arrayToRender);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [category, subcategory]);

  useEffect(() => {
    getExercisesArray();
  }, [getExercisesArray]);

  return (
    <Section className="exercises-bg" use={'first'}>
      <div className="container">
        <LinkBack to={ref.current}>
          <Icon>
            <use href={`${sprite}#${'icon-back'}`} />
          </Icon>
          Back
        </LinkBack>
        <TitleBox>
          {/*  <TitlePage title={'Waist'} /> */}
          <h3>Waist</h3>
          <ExercisesCategories activeCategory={category} />
        </TitleBox>
        {loading ? (
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
        ) : (
          <ExercisesList exercisesArray={exercisesArray} />
        )}
      </div>
    </Section>
  );
}

export default ExercisesListPage;
