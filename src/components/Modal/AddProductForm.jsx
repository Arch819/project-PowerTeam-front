import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { getAddProductThunk } from '../../store/diary/diaryThunk';
import Notiflix from 'notiflix';
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

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
 
const AddProductForm = ({ eldata, onClick, openSuccess }) => {
  const dispatch = useDispatch();
  const { title, calories, idProduct: productId } = eldata;
  const [quantity, setQuantity] = useState(1);

  const caloriesEated = Math.round((quantity * calories) / 100);

  let date = new Date();

  const formattedDate = formatDate(date);

  const handleAddToDiary = () => {
    if (!caloriesEated) {
      Notiflix.Report.failure('Error', 'Must be greater than 0', 'OK');
      return;
    }
    console.log('formattedDate', formattedDate);
    dispatch(
      getAddProductThunk({
        date: formattedDate,
        productId,
        amount: quantity,
        calories: caloriesEated,
      }),
    ).then(() => {
      openSuccess(caloriesEated);
      setQuantity(1);
      
     onClick();    })
  };

  const isCaloriesEntered = caloriesEated > 0;

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
            <WeightLabel>grams</WeightLabel>
          </label>
        </InputWrapper>
        <br />
        <CaloriesTitle>
          <CaloriesTitle>
            Calories: <CaloriesSpan>{caloriesEated}</CaloriesSpan>
          </CaloriesTitle>
        </CaloriesTitle>
        <br />
        <BtnWrapper>
          <BtnAdd type="button" onClick={handleAddToDiary} disabled={!isCaloriesEntered}>
            Add to diary
          </BtnAdd>
          <BtnCancel className='page-styled' type="button" onClick={onClick}>
            Cancel
          </BtnCancel>
        </BtnWrapper>
      </Form>
    </ModalWrapper>
  );
};

export default AddProductForm;
