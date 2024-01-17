import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import ExercisesList from 'components/Exercises/ExercisesList';
import ExercisesCategories from 'components/Exercises/ExercisesCategories';
import { LinkBack, TitleBox } from './ExercisesListPage.styled';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

function ExercisesListPage() {
  const [exercisesArray, setExercisesArray] = useState(null);
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/exercises';
  const ref = useRef(backLinkHref);

  const getExercisesArray = useCallback(async () => {
    try {
      const data = [
        {
          _id: {
            $oid: '64f2458d6f67bc34bae4f7f7',
          },
          bodyPart: 'chest',
          equipment: 'leverage machine',
          gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
          name: 'assisted chest dip (kneeling)',
          target: 'pectorals',
          burnedCalories: 329,
          time: 3,
        },
        {
          _id: {
            $oid: '64f2458d6f67bc34bae4f801',
          },
          bodyPart: 'upper arms',
          equipment: 'leverage machine',
          gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0019.gif',
          name: 'assisted triceps dip (kneeling)',
          target: 'triceps',
          burnedCalories: 233,
          time: 3,
        },
        {
          _id: {
            $oid: '64f2458d6f67bc34bae4f813',
          },
          bodyPart: 'upper arms',
          equipment: 'barbell',
          gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0038.gif',
          name: 'barbell drag curl',
          target: 'biceps',
          burnedCalories: 84,
          time: 3,
        },
      ];
      setExercisesArray(data); // запит на бек
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getExercisesArray();
  }, [getExercisesArray]);

  return (
    <div className="container">
      <LinkBack to={ref.current}>
        <BiArrowBack /> Back
      </LinkBack>
      <TitleBox>
        {/*  <TitlePage title={'Waist'} /> */}
        <h3>Waist</h3>
        <ExercisesCategories activeCategory={category} />
      </TitleBox>

      <ExercisesList />
    </div>
  );
}

export default ExercisesListPage;
