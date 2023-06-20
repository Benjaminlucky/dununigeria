
import React, { useRef, useState } from 'react';
import { sliderContent } from '../../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       
       
        <div className="slider__container">
        {
            sliderContent.map(({title, summary, image, cta}, index) => {
                return (
                    <SwiperSlide key={index} className="slider-content">
                        <div className="slider__left-content">
                            <h2>{title}</h2>
                            <p>{summary}</p>
                            <div className="btn__medium">{cta}</div>
                        </div>
                        <div className="slider__right-content">
                            <div className="slide__image">
                                <img src={image} alt='product image'/>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
        </div>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}


