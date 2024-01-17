// Diary page "/diary"
// Складається з:
//  - компоненту TitlePage(опис компонента деталізовано у Profile page)
//  - компоненту DaySwitch, що дозволяє користувачу змінити дату, інформацію за яку він хоче переглянути
//  - компоненту DayProducts, що містить інформацію про перелік продуктів, спожитих користувачем за обрану ним дату
//  - компоненту DayExercises, що містить інформацію про перелік вправ, виконаних користувачем за обрану ним дату
//  - компоненту DayDashboard, що містить зведену інформацію за день по результатах спожитих користувачем продуктів та викона-
// них ним вправ

import Section from 'components/Section';

function DiaryPage() {
  return (
    <Section>
      <div className="container">
        <h2>Diary</h2>
      </div>
    </Section>
  );
}

export default DiaryPage;
