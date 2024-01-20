import { useDispatch } from 'react-redux';
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
            onClick={() => dispatch(getDeleteExerciseThunk(idExercise))}
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
