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
import { netliflixConfirmLogout } from 'helpers/notiflixMessage';

const DayProductsItemMobile = ({ products }) => {
  const dispatch = useDispatch();
  const deleteProduct = async id => {
    try {
      await netliflixConfirmLogout('delete');
      dispatch(getDeleteProductThunk(id));
    } catch (error) {
      return;
    }
  };
  return products.map(
    ({ idProduct, title, category, calories, amount, recommended }) => (
      <DayProductItem key={idProduct}>
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
              <IsRecommend $recommended={recommended} />
              {recommended ? 'Yes' : 'No'}
            </ProductsTextRecommend>
          </div>
          <DeleteButton type="button" onClick={() => deleteProduct(idProduct)}>
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
