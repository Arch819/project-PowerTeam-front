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
import { notiflixConfirmLogout } from 'helpers/notiflixMessage';

const DayExerciseItem = ({ exercises }) => {
  const dispatch = useDispatch();
  const deleteExercise = async id => {
    try {
      await notiflixConfirmLogout('delete');
      dispatch(getDeleteExerciseThunk(id));
    } catch (error) {
      return;
    }
  };
  const formatTime = minutes => {
    const totalMinutes = Math.floor(minutes);
    const seconds = Math.round((minutes - totalMinutes) * 60);
    if (minutes < 0) {
      return formatTime(Math.abs(minutes));
    }
    console.log(totalMinutes);
    return `${totalMinutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };
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
        <TableTextTime>{formatTime(time)}</TableTextTime>
        <td>
          <DeleteButton
            type="button"
            onClick={() => deleteExercise(idExercise)}
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
