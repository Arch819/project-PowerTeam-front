// Exercises page "/exercises"
// Складається з:
//  - компоненту TitlePage (опис компонента деталізовано у Diary page)
//  - компоненту ExercisesCategories, що дозволяє користувачу обрати категорію вправ, за якою він буде фільтрувати вправи
//  - компоненту ExercisesSubcategoriesList, що містить перелік підкатегорій вправ ExercisesSubcategoriesItem, в залежності від
// обраної користувачем категорії
//   - компоненту ExercisesList, що містить перелік вправ і відображається у разі обрання певної ExercisesSubcategoriesItem

import DayDashboard from 'components/diary/DayDashboard';
import DaySwitch from 'components/diary/DaySwitch';

function ExercisesPage() {
  return (
    <>
      <DaySwitch />
      <DayDashboard />
    </>
  );
}

export default ExercisesPage;
