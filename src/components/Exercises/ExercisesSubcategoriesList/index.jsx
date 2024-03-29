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
    <>
      <Swiper
        className="swiper-box"
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        grid={{
          rows: 10,
          fill: 'row',
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
      >
        {subcategoriesList.map(({ idFilter, filter, name, imgURL }) => (
          <SwiperSlide className="swiper-slide" key={idFilter}>
            <Link
              to={`/exercises/${category}/${encodeURIComponent(name)}`}
              state={{ from: location }}
              aria-label="link to exercises by subcategory"
            >
              <Image src={imgURL} alt={name}></Image>
              <TextContainer>
                <h3>{capitalizedWord(name)}</h3>
                <p>{filter}</p>
              </TextContainer>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ExercisesSubcategoriesList;
