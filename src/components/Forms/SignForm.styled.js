import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 14px;
  left: 14px;
  color: #efede899;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  pointer-events: none;
  transition: top 0.2s, font-size 0.2s, transform 0.2s;
  transform-origin: left top;
  ${props =>
    props.active &&
    `
    top: -6px;
    transform: scale(0.7) translateY(-100%);
    left: 0;
    font-size: 16px;
  `}

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    ${props =>
      props.active &&
      `
    top: -5px;
    font-size: 20px;
  `}
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 46px;
  max-width: 335px;
  font-size: 14px;
  line-height: 1.2;
  align-items: center;
  border-radius: 12px;
  border: 1px solid
    ${props =>
      props.error
        ? '#D80027'
        : props.success
        ? '#3CBF61'
        : 'rgba(239, 237, 232, 0.3)'};
  padding: 14px;
  color: #efede8;
  background-color: transparent;

  &:hover,
  &:focus {
    border: 1px solid #e6533c;
    outline: none;
  }
  &:focus + ${StyledLabel} {
    top: -15px;
    font-size: 14px;
  }

  &:last-child {
    margin-bottom: ${props => (props.error ? '0' : '25px')};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    max-width: 364px;
    height: 52px;

    &:last-child {
      margin-bottom: ${props => (props.error ? '0' : '25px')};
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 18px;
  &:last-child {
    margin-bottom: ${props => (props.error ? '0' : '28px')};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: ${props => (props.error ? '0' : '30px')};
    }
  }
`;

export const SvgIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  fill: ${props => props.fill || '#d80027'};
`;

export const ErrorMessage = styled.div`
  color: ${props => props.color || '#d80027'};
  margin-top: 4px;
  line-height: 1.5;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledPasswordInputContainer = styled.div`
  position: relative;
`;

export const IconPasswordWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  width: 20px;
  justify-content: flex-end;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    right: 0;
    left: 298px;
  }

  @media screen and (min-width: 768px) {
    right: 0;
    left: 325px;
  }
`;

export const SvgPasswordIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const SubmitButton = styled.button`
  display: block;
  padding: 12px 40px;
  margin-top: 28px;
  background-color: #e6533c;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
    padding: 16px 60px;
    margin-top: 64px;
  }
`;
