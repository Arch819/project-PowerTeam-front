import {
  Image,
  SubExercisesLi,
  TextContainer,
} from './ExercisesSubCategoriesItem.styled';
import { Link, useLocation } from 'react-router-dom';

const ExercisesSubcategoriesItem = ({ id, filter, name, imgURL, category }) => {
  const location = useLocation();
  const validName = encodeURIComponent(name);

  const capitalizedWord = word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  };

  return (
    <SubExercisesLi key={id}>
      <Link
        to={`/exercises/${category}/${validName}`}
        state={{ from: location }}
      >
        <Image src={imgURL} alt="name"></Image>
        <TextContainer
          style={{
            background:
              'linear-gradient(0deg, rgba(4, 4, 4, 0.50) 0%, rgba(4, 4, 4, 0.50) 100%)',
          }}
        >
          <h3>{capitalizedWord(name)}</h3>
          <p>{filter}</p>
        </TextContainer>
      </Link>
    </SubExercisesLi>
  );
};

export default ExercisesSubcategoriesItem;
