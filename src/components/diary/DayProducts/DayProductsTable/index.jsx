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
