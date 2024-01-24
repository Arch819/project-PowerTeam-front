import React from 'react';
import { Image, TextContainer } from './ExercisesSubcategoriesList.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';
import { Link, useLocation } from 'react-router-dom';

const ExercisesSubcategoriesList = ({ subcategoriesList, category }) => {
  const location = useLocation();

  const capitalizedWord = word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  };

  return (
    <div style={{ height: '444px' }}>
      <Swiper
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            grid: {
              rows: 10,
              fill: 'row',
            },
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
              rows: 3,
              fill: 'row',
            },
          },
          1440: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
        }}
        modules={[Grid, Pagination]}
        style={{
          '--swiper-pagination-bullet-inactive-color':
            ' rgba(239, 237, 232, 1)',
          '--swiper-pagination-color': 'rgba(230, 83, 60, 1)',
          '--swiper-pagination-bullet-size': '14px',
          '--swiper-pagination-bullet-horizontal-gap': '8px',
        }}
      >
        {subcategoriesList.map(({ idFilter, filter, name, imgURL }) => (
          <SwiperSlide key={idFilter}>
            <Link
              to={`/exercises/${category}/${encodeURIComponent(name)}`}
              state={{ from: location }}
            >
              <Image src={imgURL} alt="name"></Image>
              <TextContainer>
                <h3>{capitalizedWord(name)}</h3>
                <p>{filter}</p>
              </TextContainer>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExercisesSubcategoriesList;
