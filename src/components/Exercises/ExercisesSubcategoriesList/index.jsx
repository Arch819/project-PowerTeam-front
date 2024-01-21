import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem';
import { SubCategoriesList } from './ExercisesSubcategoriesList.styled';

const ExercisesSubcategoriesList = ({ subcategoriesList, category }) => {
  return (
    <div>
      <SubCategoriesList>
        {subcategoriesList.map(({ idFilter, filter, name, imgURL }) => (
          <ExercisesSubcategoriesItem
            key={idFilter}
            filter={filter}
            name={name}
            imgURL={imgURL}
            category={category}
          />
        ))}
      </SubCategoriesList>
    </div>
  );
};

export default ExercisesSubcategoriesList;
