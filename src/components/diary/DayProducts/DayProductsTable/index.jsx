// DayProducts містить в собі:
//  - підзаголовок
//  - посилання Add product, що переадресовує користувача на Products page
//  - компонент ProductsTable, що містить інформацію про перелік продуктів, спожитих користувачем за обрану ним дату
// По clickу на іконку-"смітник" має відправлятись запит на backend щодо видалення відповідного продукту по його ID.
// Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді вспливаючого віконечка-notification. Якщо запит на backend пройшов успішно - дані слід актуалізувати.

import { useSelector } from 'react-redux';
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
import MediaQuery from 'react-responsive';
import { selectProducts } from 'store/diary/diarySelectors';

function DayProducts() {
  const products = useSelector(selectProducts);
  return (
    <>
      <MediaQuery minWidth={768}>
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
          {products ? (
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
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <DayProductsMobile />
      </MediaQuery>
    </>
  );
}

export default DayProducts;
