import ExercisesCategories from 'components/Exercises/ExercisesCategories';
import ExercisesSubcategoriesList from 'components/Exercises/ExercisesSubcategoriesList';
import TitlePage from 'components/TitlePage';
import { NavBox } from './ExercisesPage.styled';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function ExercisesPage() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('Body parts');

  const handleCategory = category => {
    setActiveCategory(category);
  };

  return (
    <div className="container">
      <NavBox>
        {/*  <TitlePage title={'Exercises'} /> */}
        <h3>Exercises</h3>
        <ExercisesCategories
          activeCategory={activeCategory}
          handleCategory={handleCategory}
        />
      </NavBox>

      <ExercisesSubcategoriesList />
    </div>
  );
}

export default ExercisesPage;
