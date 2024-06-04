import React from 'react';
import './projects.css';
import Card from './Card'; // Assuming Card component renders image and description
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
function Projects() {
  return (
    <div className='projects'>
      <div className="top">
        <h2>What i've done</h2>
        <p>(more coming soon)</p>
      </div>
      <div className="bottom">
      <Swiper 
    effect={'coverflow'}
    grabCursor={true}
    slidesPerView={'auto'}
    centeredSlides={true}
    loop={true}
    coverflowEffect={{
      rotate: 0,
      stretch: 50,
      depth: 100,
      modifier: 2.5,
    }}
    pagination={{el:'.swiper-pagination', clickable: true}}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}
    clickable={true}
    modules={[EffectCoverflow, Pagination, Navigation]}
    className='swiper-container'
    >
      {/* Assuming Card component takes props for image and description */}
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      
      <div className="slider-controller">
        <div className="swiper-button-prev slider-arrow">
            {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
        </div>
        <div className="swiper-button-next slider-arrow">
            {/* <i class="fa fa-arrow-left" aria-hidden="true"></i> */}
        </div>
        <div className="swiper-pagination">

        </div>
      </div>
    </Swiper>
      </div>
    </div>
  );
}

export default Projects;
