import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperBox = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  padding-bottom: 40px !important;

  > .swiper-pagination .swiper-pagination-bullet {
    background-color: rgba(239, 237, 232, 0.1);
  }

  > .swiper-pagination .swiper-pagination-bullet-active {
    background-color: var(--color-btn-secondary);
  }

  > .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
`;

export const SwiperItem = styled(SwiperSlide)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;

  border: 1px solid rgba(239, 237, 232, 0.2);
  //transition: var(--transition);

  &:hover,
  &:focus {
    border: 1px solid var(--bg-alert);
  }

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: auto;
  max-width: 334px;

  @media screen and (min-width: 375px) {
    width: 334px;
    height: 206px;
  }

  @media screen and (min-width: 768px) {
    width: 222px;
    height: 206px;
  }

  @media screen and (min-width: 1440px) {
    width: 235px;
    height: 206px;
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

  transition: var(--transition);

  &:hover,
  &:focus {
    background: linear-gradient(
      0deg,
      rgba(4, 4, 4, 0.5) 0%,
      rgba(4, 4, 4, 0.5) 100%
    );
  }

  > h3 {
    font-style: normal;
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
