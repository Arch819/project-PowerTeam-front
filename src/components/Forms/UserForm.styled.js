import { Field, Form } from 'formik';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/system';
import { Radio } from '@mui/material';

const StyledForm = styled(Form)`
  margin: 0 auto;
  max-width: 335px;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
`;

const MainInfoContainer = styled.div`
  width: 100%;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-bottom: 14px;
`;

const PersonalInfoItems = styled.div`
  flex-basis: calc(50% - 7px);
  max-width: 160px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: rgba(239, 237, 232, 0.5);
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const LabelGender = styled.label`
  display: flex;
  align-items: center;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const Input = styled(Field)`
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: inline-flex;
  width: 100%;
  border-radius: 12px;
  padding: 14px;
  color: #efede8;
  background-color: inherit;
  border: 1px solid rgba(239, 237, 232, 0.3);
`;

const BloodGenderThumb = styled.div`
  display: flex;
  gap: 21px;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
`;

const BloodThumb = styled.div`
  display: flex;
  gap: 8px;
`;

const GenderThumb = styled.div`
  display: flex;
  gap: 9px;
`;
const OrangeRadio = muiStyled(Radio)({
  color: '#636366',
  margin: 0,
  marginRight: '8px',
  padding: 0,
  width: '20px',
  height: '20px',
  '&.Mui-checked': {
    color: '#Ef8964',
    padding: '0',
  },
  '& + .MuiFormControlLabel-label': {
    color: '#EFEDE8',

    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    margin: '0 9px 0 0',
    padding: 0,
  },
});

const LevelActivitiThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;

const ActivitiLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 9px;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const SubmitButton = muiStyled('button')({
  color: '#EFEDE8',
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '12px 40px',
  borderRadius: '12px',
  backgroundColor: '#e6533c',
  '&:hover': {
    backgroundColor: '#EF8964',
  },
});

export {
  StyledForm,
  Label,
  MainInfo,
  MainInfoContainer,
  Input,
  BloodGenderThumb,
  OrangeRadio,
  RadioLabel,
  BloodThumb,
  GenderThumb,
  LevelActivitiThumb,
  SubmitButton,
  PersonalInfo,
  PersonalInfoItems,
  LabelGender,
  ActivitiLabel,
};
