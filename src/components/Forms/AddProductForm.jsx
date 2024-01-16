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
  return (
    <ProductsFilterList>
      <li>
        <ProductsFilterLabel>
          <ProductsFilterSearch
            value={search}
            onChange={onChangeSearch}
            name="productSearch"
            type="text"
            placeholder="Search"
          />
          <ProductsBtnClose type="button" onClick={delTextInput}>
            <ProductsSvgClose>
              <use href={sprite + '#icon-close'}></use>
            </ProductsSvgClose>
          </ProductsBtnClose>
          <ProductsBtnSearch type="button">
            <ProductsSvgSearch>
              <use href={sprite + '#icon-search'}></use> {/* check name */}
            </ProductsSvgSearch>
          </ProductsBtnSearch>
        </ProductsFilterLabel>
      </li>
      <li>
        <SelectWrapper>
          <Select
            styles={customStyles}
            value={category}
            onChange={onCategoriesChange}
            placeholder="Categories"
            options={categoriesList || []}
            theme={theme => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary50: 'rgba(255, 255, 255, 0.10)', // Цвет фона при нажатии на селект в меню
                primary: 'transparent',
                neutral40: '#EFEDE8', // ховер на птичку
                neutral20: 'transparent', // дефолтный бордер
                neutral30: 'transparent', // дефолтный ховер бордер
                neutral50: 'rgba(239, 237, 232, 1)', // цвет плейсхолдера
                neutral80: 'rgba(239, 237, 232, 1)',
              },
            })}
          />
        </SelectWrapper>
      </li>
    </ProductsFilterList>
  );
}

export default AddProductForm;
