import { useDispatch } from 'react-redux';
import {
  DeleteButton,
  IsRecommend,
  TableText,
  TableTextLast,
  TableTextNext,
  TableTextSecond,
} from './index.styled';
import sprite from '../../../../images/sprite.svg';
import { getDeleteProductThunk } from 'store/diary/diaryThunk';

const DayProductItem = ({ products }) => {
  const dispatch = useDispatch();
  return products.map(
    ({ productId, title, category, calories, amount, recommend }) => (
      <tr key={productId}>
        <TableText>{title}</TableText>
        <TableTextSecond>{category}</TableTextSecond>
        <TableTextNext>{calories}</TableTextNext>
        <TableTextNext>{amount}</TableTextNext>
        <TableTextLast>
          <IsRecommend $recommend={recommend} />
          {recommend ? 'Yes' : 'No'}
        </TableTextLast>
        <td>
          <DeleteButton
            type="button"
            onClick={() => dispatch(getDeleteProductThunk(productId))}
          >
            <svg width="20px" height="20px">
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </DeleteButton>
        </td>
      </tr>
    )
  );
};

export default DayProductItem;
