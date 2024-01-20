import { Field, Form } from 'formik';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/system';
import { Radio } from '@mui/material';

const StyledForm = styled(Form)`
  margin: 0 auto;
  padding-top: 20px;
  max-width: 335px;
  @media (min-width: 768px) {
    max-width: 734px;
    padding-top: 40px;
  }
  @media (min-width: 1440px) {
    border-right: var(--border-20);
    max-width: 740px;
    padding-top: 0;
    padding-right: 64px;
    margin: 0;
  }
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
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
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const PersonalInfoItems = styled.div`
  flex-basis: calc(50% - 7px);
  max-width: 160px;
  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: var(--color-text-pr50);
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const LabelGender = styled.label`
  display: flex;
  align-items: center;
  color: var(--color-text-primary);
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  color: var(--color-text-primary);
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Input = styled(Field)`
  color: var(--color-text-primary);
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: inline-flex;
  width: 100%;
  border-radius: 12px;
  padding: 14px;
  background-color: inherit;
  border: var(--border-30);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const BloodGenderThumb = styled.div`
  display: flex;
  gap: 21px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    justify-content: start;
    gap: 32px;
  }
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
    color: 'var(--bg-btn-hover)',
    padding: '0',
  },
  '@media(min-width: 768px)': {
    width: '24px',
    height: '24px',
  },
});

const LevelActivitiThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-bottom: 38px;
  }
`;

const ActivitiLabel = styled.label`
  display: flex;
  align-items: center;
  color: var(--color-text-primary);
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const SubmitButton = muiStyled('button')({
  color: 'var(--color-text-primary)',
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '12px 40px',
  border: 'transparent',
  borderRadius: '12px',
  backgroundColor: 'var(--bg-container)',
  '&:hover': {
    backgroundColor: 'var(--bg-btn-hover)',
  },
  '&:disabled': {
    backgroundColor: 'var(--bg-btn-hover)',
  },
  '@media(min-width: 768px)': {
    fontSize: '20px',
    lineHeight: '24px',
    padding: '16px 50px',
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
