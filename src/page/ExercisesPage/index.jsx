import Section from 'components/Section';
import ExercisesCategories from 'components/Exercises/ExercisesCategories';
import ExercisesSubcategoriesList from 'components/Exercises/ExercisesSubcategoriesList';
import TitlePage from 'components/TitlePage';
import { NavBox } from './ExercisesPage.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';
axios.defaults.baseURL = 'https://powerpulse-backend-heie.onrender.com/';

function ExercisesPage() {
  const [subcategoriesList, setSubcategoriesList] = useState([]);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { category } = useParams();

  // const handleResize = () => {
  //   const windowWidth = window.innerWidth;
  //   if (windowWidth >= 1440 || windowWidth < 768) {
  //     setLimit(10);
  //   } else {
  //     setLimit(9);
  //   }
  // };

  // useEffect(() => {
  //   handleResize();
  // }, []);

  // window.addEventListener('resize', handleResize);

  const getSubcategoriesList = useCallback(async category => {
    try {
      setLoading(true);
      // запрос на бек
      const response = await axios.get('/exercises/filters');

      const filterValid = {
        bodyPart: 'Body parts',
        target: 'Muscles',
        equipment: 'Equipment',
      };
      const subCategoriesToRender = response.data.filter(
        item => item.filter === filterValid[category]
      );
      setSubcategoriesList(subCategoriesToRender);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!category) {
      navigate('/exercises/bodyPart', { replace: true });
      return;
    }
    getSubcategoriesList(category);
  }, [getSubcategoriesList, category, navigate]);

  return (
    <Section>
      <div className="container">
        <NavBox>
          {/*  <TitlePage title={'Exercises'} /> */}
          <h3>Exercises</h3>
          <ExercisesCategories activeCategory={category} />
        </NavBox>

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
