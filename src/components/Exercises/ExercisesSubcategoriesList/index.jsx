import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem';
import React from 'react';
import {
  Image,
  SubCategoriesList,
  SwiperBox,
  SwiperItem,
  TextContainer,
} from './ExercisesSubcategoriesList.styled';
//import { Swiper, SwiperSlide } from 'swiper/react';
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
      <SwiperBox
        slidesPerView={1}
        grid={{
          fill: 'row',
          rows: 10,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            grid: {
              fill: 'row',
              rows: 3,
            },
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 5,
            grid: {
              fill: 'row',
              rows: 2,
            },
            spaceBetween: 16,
          },
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {subcategoriesList.map(({ idFilter, filter, name, imgURL }) => (
          <SwiperItem key={idFilter}>
            <Link
              to={`/exercises/${category}/${encodeURIComponent(name)}`}
              state={{ from: location }}
            >
              <Image src={imgURL} alt="name"></Image>
              <TextContainer
                style={{
                  background:
                    'linear-gradient(0deg, rgba(4, 4, 4, 0.50) 0%, rgba(4, 4, 4, 0.50) 100%)',
                }}
              >
                <h3>{capitalizedWord(name)}</h3>
                <p>{filter}</p>
              </TextContainer>
            </Link>
          </SwiperItem>
        ))}
      </SwiperBox>
    </>

    // <div>
    //   <SubCategoriesList>
    //     {subcategoriesList.map(({ idFilter, filter, name, imgURL }) => (
    //       <ExercisesSubcategoriesItem
    //         key={idFilter}
    //         filter={filter}
    //         name={name}
    //         imgURL={imgURL}
    //         category={category}
    //       />
    //     ))}
    //   </SubCategoriesList>
    // </div>
  );
};

export default ExercisesSubcategoriesList;
