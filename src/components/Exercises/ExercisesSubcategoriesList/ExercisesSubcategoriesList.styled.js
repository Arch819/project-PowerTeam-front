import styled from 'styled-components';

export const Image = styled.img`
  object-fit: cover;
  height: auto;
  max-width: 334px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 205px;
  }

  @media screen and (min-width: 768px) {
    width: 223px;
    height: 205px;
  }

  @media screen and (min-width: 1440px) {
    width: 235px;
    height: 205px;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.5) 0%,
    rgba(4, 4, 4, 0.5) 100%
  );

  > h3 {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    color: var(--color-text-primary);

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.33;
    }
  }

  > p {
    font-size: 12px;
    line-height: 1.5;
    margin-top: 2px;
    color: rgba(239, 237, 232, 0.4);
  }
`;
