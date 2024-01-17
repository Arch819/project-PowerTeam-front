// Exercises page "/exercises"
// Складається з:
//  - компоненту TitlePage (опис компонента деталізовано у Diary page)
//  - компоненту ExercisesCategories, що дозволяє користувачу обрати категорію вправ, за якою він буде фільтрувати вправи
//  - компоненту ExercisesSubcategoriesList, що містить перелік підкатегорій вправ ExercisesSubcategoriesItem, в залежності від
// обраної користувачем категорії
//   - компоненту ExercisesList, що містить перелік вправ і відображається у разі обрання певної ExercisesSubcategoriesItem

import Section from 'components/Section';

function ExercisesPage() {
  return (
    <Section>
      <div className="container">
        <h2>Exercises</h2>
      </div>
    </Section>
  );
}

export default ExercisesPage;
