import React from 'react';

const ExercisesSubcategoriesItem = ({
  filter,
  name,
  imgURL,
  handleExerciseName,
  id,
}) => {
  const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <li onClick={() => handleExerciseName(name)}>
      <img src={imgURL} alt="name" width={200}></img>
      <div>
        <h3>{capitalizeFirstLeter(name)}</h3>
        <p>{filter}</p>
      </div>
    </li>
  );
};

export default ExercisesSubcategoriesItem;
