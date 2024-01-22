import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddProductThunk } from '../../store/diary/diaryThunk';
import Notiflix from 'notiflix';
// import { fetchCurrentUser } from '../../store/auth/operations';
import { selectUser } from '../../store/auth/selector';
import {
  BtnAdd,
  BtnCancel,
  BtnWrapper,
  CaloriesSpan,
  CaloriesTitle,
  Form,
  InputQuontity,
  InputTitle,
  InputWrapper,
  ModalWrapper,
  WeightLabel,
} from '../Modal/AddProductForm.styled';
// import { notiflixMessage } from 'helpers/notiflixMessage';

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
 
const AddProductForm = ({ eldata, onClick, openSuccess }) => {
  const dispatch = useDispatch();
  const { title, calories, idProduct: productId } = eldata;
  console.log(eldata)
  const [quantity, setQuantity] = useState(1);

  const data = useSelector(selectUser);
  // const bloodType = data.blood;

  const amount = Math.round((quantity * calories) / 100);

  let date = new Date();

  const formattedDate = formatDate(date);

  const handleAddToDiary = () => {
    if (!amount) {
      Notiflix.Report.failure('Error', 'Must be greater than 0', 'OK');
      return;
    }
    console.log('formattedDate', formattedDate);
    dispatch(
      getAddProductThunk({
        date: formattedDate,
        productId,
        amount: quantity,
        calories,
      }),
    ).then(() => {
    openSuccess(calories)
     onClick();    })
  };

  return (
    <ModalWrapper>
      <Form>
        <InputWrapper>
          <label>
            <InputTitle type="text" value={title} disabled />
          </label>
          <label style={{ position: 'relative' }}>
            <InputQuontity
              value={quantity}
              type="number"
              min={1}
              onChange={e => setQuantity(e.target.value)}
            />
            <WeightLabel>weight</WeightLabel>
          </label>
        </InputWrapper>
        <br />
        <CaloriesTitle>
          <CaloriesTitle>
            Calories: <CaloriesSpan>{amount}</CaloriesSpan>
          </CaloriesTitle>
        </CaloriesTitle>
        <br />
        <BtnWrapper>
          <BtnAdd type="button" onClick={handleAddToDiary}>
            Add to diary
          </BtnAdd>
          <BtnCancel type="button" onClick={onClick}>
            Cancel
          </BtnCancel>
        </BtnWrapper>
      </Form>
    </ModalWrapper>
  );
};

export default AddProductForm;
