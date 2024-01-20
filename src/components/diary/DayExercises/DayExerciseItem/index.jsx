import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  TableText,
  TableTextCalories,
  TableTextTime,
  TableTextName,
  TableTextEquipment,
  TableTextTarget,
  DeleteButton,
} from './index.styled';
import sprite from '../../../../images/sprite.svg';
import { getDeleteExerciseThunk } from 'store/diary/diaryThunk';

const DayExerciseItem = ({ exercises }) => {
  const dispatch = useDispatch();
  // const deleteExercise = id => {
  //   try {
  //     const data = dispatch(getDeleteExerciseThunk());
  //     if (data.error.message !== 'Rejected') {
  //       Notify.success('Exercise was successful delete');
  //     }
  //   } catch (error) {
  //     Notify.failure('Ooops, something went wrong. Try again later');
  //   }
  // };
  return exercises.map(
    ({
      idExercise,
      exercise: { name, bodyPart, equipment, target },
      time,
      burnedCalories,
    }) => (
      <tr key={idExercise}>
        <TableText>{bodyPart}</TableText>
        <TableTextEquipment>{equipment}</TableTextEquipment>
        <TableTextName>{name}</TableTextName>
        <TableTextTarget>{target}</TableTextTarget>
        <TableTextCalories>{burnedCalories}</TableTextCalories>
        <TableTextTime>{time}</TableTextTime>
        <td>
          <DeleteButton
            type="button"
            onClick={() => dispatch(getDeleteExerciseThunk())}
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

export default DayExerciseItem;
