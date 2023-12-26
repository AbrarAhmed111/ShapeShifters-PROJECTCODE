import React from 'react';
import { workouts } from '../data';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

// import styles for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';

//import required modules
import { Navigation } from 'swiper';

const WorkoutSlider = () => {
  const {programs} = workouts;

  return (
    <>
    <Swiper  slidesPerView={2} navigation={true} spaceBetween={32} breakpoints={{
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      
    }} 
    modules={[Navigation]} className='workoutSlider'>
    {programs.map ((program,idx) => {
      const {image,name} = program;
      return (
        <SwiperSlide className='max-w-[320px] max-h-[320px] relative' key= {idx}>
          <img className='object-cover w-full h-full' src={image} alt="" />
          <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px]'>
          <div className='text-sm font-semibold font-primary text-neutral-500 '>{name}</div>
          </div>
        </SwiperSlide>
      )
    })}


    </Swiper>
    </>
  );
};

export default WorkoutSlider;
