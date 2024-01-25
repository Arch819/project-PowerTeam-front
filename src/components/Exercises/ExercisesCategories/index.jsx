import {
  ExercisesItem,
  ExercisesList,
  StyledLink,
} from './ExercisesCategories.styled';

const ExercisesCategories = ({ activeCategory }) => {
  return (
    <div>
      <ExercisesList>
        <ExercisesItem>
          <StyledLink
            to="/exercises/bodyPart"
            className={activeCategory === 'bodyPart' ? 'active' : ''}
            aria-label="link to exercises by body part"
          >
            Body parts
          </StyledLink>
        </ExercisesItem>
        <ExercisesItem>
          <StyledLink
            to="/exercises/target"
            className={activeCategory === 'target' ? 'active' : ''}
            aria-label="link to exercises by muscles"
          >
            Muscles
          </StyledLink>
        </ExercisesItem>
        <ExercisesItem>
          <StyledLink
            to="/exercises/equipment"
            className={activeCategory === 'equipment' ? 'active' : ''}
            aria-label="link to exercises by equipment"
          >
            Equipment
          </StyledLink>
        </ExercisesItem>
      </ExercisesList>
    </div>
  );
};

export default ExercisesCategories;
