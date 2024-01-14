import React from 'react';
import {
  Image,
  SubExercisesLi,
  TextContainer,
} from './ExercisesSubCategoriesItem.styled';

const ExercisesSubcategoriesItem = () => {
  return (
    <SubExercisesLi>
      <Image src="#" alt="name"></Image>
      <TextContainer
        style={{
          background:
            'linear-gradient(0deg, rgba(4, 4, 4, 0.50) 0%, rgba(4, 4, 4, 0.50) 100%)',
        }}
      >
        <h3>test</h3>
        <p>test</p>
      </TextContainer>
    </SubExercisesLi>
  );
};

export default ExercisesSubcategoriesItem;
