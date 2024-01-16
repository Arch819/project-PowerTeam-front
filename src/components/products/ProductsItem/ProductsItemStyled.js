import styled from 'styled-components';

const ProductsItemStyled = styled.li`
  position: relative;
  width: 335px;
  padding: 16px;

  border-radius: 12px;
  border: var(--border-20);
  background: rgba(239, 237, 232, 0.05);

  .diet {
    width: 41px;
    height: 24px;
    padding: 5px 7.5px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: rgba(239, 237, 232, 0.05);
    margin-bottom: 35px;

    color: var(--color-text-white);
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
  }

  .under-box {
    position: absolute;
    top: 16px;
    right: 16px;
    height: 18px;

    display: flex;
    align-items: center;
    gap: 16px;

    .recommend-box {
      display: flex;
      align-items: center;
      gap: 8px;
      .recommend-marker {
        width: 14px;
        height: 14px;
        background-color: #419b09;
        border-radius: 10px;
      }
      .no-recommend-marker {
        width: 14px;
        height: 14px;
        border-radius: 10px;
        background-color: #e9101d;
      }
      .recommend-text {
        color: var(--color-text-primary);
        font-size: 12px;
        font-weight: 400;
        line-height: 150%;
      }
    }
    .btn-box {
      display: flex;
      align-items: center;
      gap: 8px;
      .btn-text {
        color: var(--color-text-caloriesV2);
        font-size: 14px;
        line-height: 128.571%;
      }
      .btn-svg {
        width: 16px;
        height: 16px;
        fill: #e6533c;
        stroke: #e6533c;
      }
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
      max-width: 263px;
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
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;

    .categories-item {
      display: flex;
      gap: 4px;
      .category-name {
        color: var(--color-text-pr40);
        font-size: 12px;
        line-height: 150%;
      }
      .category-data {
        color: var(--color-text-primary);
        font-size: 12px;
        line-height: 150%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .diet {
      margin-bottom: 32px;
    }

    .under-box {
      .btn-box {
        .btn-text {
          color: var(--color-text-caloriesV2);
          font-size: 16px;
          line-height: 150%;
        }
      }
    }

    .title-box {
      .title-exercise {
        color: var(--color-text-primary);
        font-size: 24px;
        line-height: 133.333%;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
    .diet {
      margin-bottom: 27px;
    }
    .under-box {
      .btn-box {
        .btn-text {
          font-size: 16px;
          line-height: 150%;
        }
      }
    }

    .title-box {
      .title-exercise {
        max-width: 333px;
        font-size: 24px;
        line-height: 133.333%;
      }
    }
  }
`;

export default ProductsItemStyled;
