import { useDispatch } from 'react-redux';
import {
  Container,
  DayProductItem,
  DeleteButton,
  IsRecommend,
  ProductItemContainer,
  ProductsText,
  ProductsTextCalories,
  ProductsTextRecommend,
  ProductsTextWeight,
  ProductsTitle,
} from './index.styled';
import sprite from '../../../../images/sprite.svg';
import { getDeleteProductThunk } from 'store/diary/diaryThunk';

const DayProductsItemMobile = ({ products }) => {
  const dispatch = useDispatch();
  return products.map(
    ({ productId, title, category, calories, amount, recommend }) => (
      <DayProductItem key={productId}>
        <ProductsTitle>Title</ProductsTitle>
        <ProductsText>{title}</ProductsText>
        <ProductsTitle>Category</ProductsTitle>
        <ProductsText>{category}</ProductsText>
        <Container>
          <ProductItemContainer>
            <ProductsTitle>Calories</ProductsTitle>
            <ProductsTextCalories>{calories}</ProductsTextCalories>
          </ProductItemContainer>
          <ProductItemContainer>
            <ProductsTitle>Weight</ProductsTitle>
            <ProductsTextWeight>{amount}</ProductsTextWeight>
          </ProductItemContainer>
          <div>
            <ProductsTitle>Recommend</ProductsTitle>
            <ProductsTextRecommend>
              <IsRecommend $recommend={recommend} />
              {recommend ? 'Yes' : 'No'}
            </ProductsTextRecommend>
          </div>
          <DeleteButton
            type="button"
            onClick={() => dispatch(getDeleteProductThunk(productId))}
          >
            <svg width="20px" height="20px">
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </DeleteButton>
        </Container>
      </DayProductItem>
    )
  );
};

export default DayProductsItemMobile;
