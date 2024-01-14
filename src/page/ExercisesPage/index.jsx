import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import ExercisesCategories from 'components/Exercises/ExercisesCategories';
import TitlePage from 'components/TitlePage';
import ExercisesSubcategoriesList from 'components/Exercises/ExercisesSubcategoriesList';
import ExercisesList from 'components/Exercises/ExercisesList';

axios.defaults.baseURL = 'https://powerpulse-backend-heie.onrender.com';

function ExercisesPage() {
  const [activeFilter, setActiveFilter] = useState('bodyparts');
  const [exerciseName, setExerciseName] = useState('');
  const [subCategories, setSubCategories] = useState(null);
  const [exercisesList, setExercisesList] = useState(null);

  const getSubcategoriesList = useCallback(async activeFilter => {
    // const activeFilterValid = activeFilter.toLowerCase().replaceAll(' ', '');
    try {
      const res = await axios.get(`/exercises/${activeFilter}`);
      setSubCategories(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('test');
    }
  }, []);

  useEffect(() => {
    getSubcategoriesList(activeFilter);
  }, [getSubcategoriesList, activeFilter]);

  const handleActiveFilter = filter => {
    setActiveFilter(filter);
  };

  const handleExerciseName = name => {
    setExerciseName(name);
    getListExercises(exerciseName);
  };

  const getListExercises = async name => {
    const backRename = {
      bodyparts: 'bodyPart',
      equipment: 'equipment',
      muscles: 'target',
    };
    const exerciseFilterValid = backRename[activeFilter];

    console.log(exerciseFilterValid, exerciseName);

    try {
      const res = await axios.get(`/exercises`);
      console.log(res.data);
      const arrayToRender = res.data.filter(
        element => element[exerciseFilterValid] === exerciseName
      );
      setExercisesList(arrayToRender);
      console.log(exercisesList);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('exercisesList');
    }
  };

  return (
    <main>
      <div>
        <h2>Exercises</h2>
        <TitlePage title={'Exercises'} />
        <ExercisesCategories
          activeFilter={activeFilter}
          handleActiveFilter={handleActiveFilter}
        />
        {subCategories && (
          <ExercisesSubcategoriesList
            handleExerciseName={handleExerciseName}
            subCategories={subCategories}
          />
        )}

        {exercisesList && <ExercisesList exercisesList={exercisesList} />}
      </div>
    </main>
  );
}
export default ExercisesPage;
