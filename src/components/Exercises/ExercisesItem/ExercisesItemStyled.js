import styled from 'styled-components';

const ExercisesItemStyled = styled.li`
  position: relative;
  width: 100%;
  max-height: 163px;
  padding: 16px;

  border-radius: 12px;
  border: var(--border-20);
  background: rgba(239, 237, 232, 0.05);

  &:hover,
  &:focus {
    transition: var(--transition);
    border: 1px solid var(--bg-alert);
    box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,
      8px 8px 8px 2px rgba(34, 60, 80, 0.2);
  }

  .workout {
    width: 73px;
    height: 24px;
    padding: 5px 7.5px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: rgba(239, 237, 232, 0.05);
    margin-bottom: 33px;

    color: var(--color-text-white);
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
  }

  .btn-box {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    color: var(--color-text-caloriesV2);
    fill: var(--color-text-caloriesV2);
    stroke: var(--color-text-caloriesV2);

    display: flex;
    align-items: center;
    gap: 8px;

    .btn-text {
      font-size: 14px;
      line-height: 128.571%;
    }

    .btn-svg {
      width: 16px;
      height: 16px;
    }

    &:hover,
    &:focus {
      transition: var(--transition);
      color: var(--color-text-white);
      fill: var(--color-text-white);
      stroke: var(--color-text-white);
    }
  }

  .title-box {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

    .title-svg-route {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 24px;
      background: #efa082;

      .title-svg-person {
        width: 14.07px;
        height: 16px;
        fill: var(--color-text-white);
        stroke: var(--color-text-white);
      }
    }
    .title-exercise {
      max-width: 220px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;

      color: var(--color-text-primary);
      font-size: 20px;
      font-weight: 400;
      line-height: 120%;
    }
  }

  .categories-list {
    max-width: 303px;

    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;

    .categories-item {
      display: flex;
      gap: 4px;
      .category-name {
        color: rgba(239, 237, 232, 0.4);
        font-size: 12px;
        line-height: 150%;
      }
      .category-data {
        color: #efede8;
        font-size: 12px;
        line-height: 150%;
      }
    }
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    .workout {
      margin-bottom: 25px;
    }

    .btn-box {
      .btn-text {
        font-size: 16px;
        line-height: 150%;
      }
    }

    .title-box {
      .title-exercise {
        font-size: 24px;
        line-height: 133.333%;
      }
    }

    .categories-list {
      width: 303px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 405px;

    .workout {
      margin-bottom: 27px;
    }

    .btn-box {
      .btn-text {
        font-size: 16px;
        line-height: 150%;
      }
    }

    .title-box {
      .title-exercise {
        max-width: 304px;
      }
    }

    .categories-list {
      width: 100%;
    }
  }
`;

export default ExercisesItemStyled;
