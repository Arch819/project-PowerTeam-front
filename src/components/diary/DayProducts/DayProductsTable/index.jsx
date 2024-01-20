// DayProducts містить в собі:
//  - підзаголовок
//  - посилання Add product, що переадресовує користувача на Products page
//  - компонент ProductsTable, що містить інформацію про перелік продуктів, спожитих користувачем за обрану ним дату
// По clickу на іконку-"смітник" має відправлятись запит на backend щодо видалення відповідного продукту по його ID.
// Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді вспливаючого віконечка-notification. Якщо запит на backend пройшов успішно - дані слід актуалізувати.

// import { useSelector } from 'react-redux';
import {
  AddProductButton,
  ProductsHeader,
  ProductsSection,
  ProductsTable,
  ProductsTableThead,
  ProductsTitle,
  TableTitle,
  TableWrapper,
} from './index.styled';
import sprite from '../../../../images/sprite.svg';
import DayProductItem from '../DayProductItem';
import DayProductsMobile from '../DayProductsMobile';
import DayProductsPlug from '../DayProductsPlug';
// import { selectProducts } from 'store/diary/diarySelectors';

function DayProductsTable() {
  // const products = useSelector(selectProducts);
  const products = [
    // {
    //   productId: '5d51694902b2373622fadsfdsdsf5e13',
    //   date: '15-01-2024',
    //   category: 'vegetables and herbs',
    //   title: 'Salads Belaya Dacha Delicate root',
    //   recommend: true,
    //   calories: 17,
    //   amount: 100,
    // },
    // {
    //   productId: '5d51694902b23736sfsdfds22lff5e13',
    //   date: '15-01-2024',
    //   category: 'vegetables and herbs',
    //   title: 'Salads Belaya Dacha Delicate root',
    //   recommend: true,
    //   calories: 17,
    //   amount: 100,
    // },
    // {
    //   productId: '5d51694902b237sfds362f2ff5e13',
    //   date: '15-01-2024',
    //   category: 'vegetables ',
    //   title: 'Bread Hercules grain',
    //   recommend: false,
    //   calories: 17,
    //   amount: 100,
    // },
    // {
    //   productId: '5d51694902b2373scfs6622ff5e13',
    //   date: '15-01-2024',
    //   category: 'Meat',
    //   title: 'Venison stew Specia',
    //   recommend: true,
    //   calories: 17,
    //   amount: 100,
    // },
    // {
    //   productId: '5d51694902b23736dfs92ff5e13',
    //   date: '15-01-2024',
    //   category: 'Meat',
    //   title: 'Venison stew Specia',
    //   recommend: true,
    //   calories: 17,
    //   amount: 100,
    // },
    // {
    //   productId: '5d51694902b2373622fdsfsf5e13',
    //   date: '15-01-2024',
    //   category: 'Meat',
    //   title: 'Venison stew Specia',
    //   recommend: true,
    //   calories: 17,
    //   amount: 100,
    // },
  ];
  const { matches } = window.matchMedia('(min-width:768px)');
  return matches ? (
    <ProductsSection>
      <ProductsHeader>
        <ProductsTitle>Products</ProductsTitle>
        <AddProductButton to="/products">
          Add product
          <svg width="16" height="16">
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </AddProductButton>
      </ProductsHeader>
      {products.length > 0 ? (
        <TableWrapper>
          <ProductsTable>
            <ProductsTableThead>
              <tr>
                <TableTitle>Title</TableTitle>
                <TableTitle>Category</TableTitle>
                <TableTitle>Calories</TableTitle>
                <TableTitle>Weight</TableTitle>
                <TableTitle>Recommend</TableTitle>
              </tr>
            </ProductsTableThead>
            <tbody>
              <DayProductItem products={products} />
            </tbody>
          </ProductsTable>
        </TableWrapper>
      ) : (
        <DayProductsPlug />
      )}
    </ProductsSection>
  ) : (
    <DayProductsMobile />
  );
}

export default DayProductsTable;
