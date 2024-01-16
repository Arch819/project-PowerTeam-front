// AddProductForm містить:
//  - назву продукту, який додається як спожитий
//  - поле для введення користувачем кількості спожитого продукту(в грамах)
//  - кількість калорій, що динамічно розраховується та відображається в залежності від введеної користувачем кількості продукту(в грамах) за формулою

// Х = (кількість продукту, введена користувачем, як спожита * кількість калорій, яку вміщує продукт в 100g) / 100g

// AddProductForm також містить кнопки  Add to diary та Cancel.

// product(product ID) - string; required
// date - string; format dd/mm/YYYY; required
// amount - number; minimum 1(g); required
// calories - number; minimum 1; required

// Кнопка Add to diary(типу "submit") - відправляє запит на backend для додавання спожитого користувачем продукту за день.
// Кнопка Cancel(типу "button") - закриває модальне вікно BasicModalWindow.

// Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді вспливаючого віконечка-notification. При цьому модальне вікно BasicModalWindow має залишатись відкритим для зручного редагування користувачем даних на випадок їх повторного

function AddProductForm() {
  return <div></div>;
}

export default AddProductForm;
