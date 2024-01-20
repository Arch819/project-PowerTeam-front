import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ExercisesList = styled.ul`
  display: flex;
  gap: 28px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const ExercisesItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  position: relative;

  &.active {
    color: #efede8;
  }
`;

export const StyledLink = styled(Link)`
  //padding: 0;
  outline: none;
  text-decoration: none;

  color: rgba(239, 237, 232, 0.4);
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  //background-color: transparent;

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #ef8964;
  }

  &.active {
    color: #efede8;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
