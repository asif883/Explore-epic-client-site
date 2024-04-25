
import  { useRef, } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='mt-10 '>
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
        className="mySwiper h-[650px] rounded-lg"
      >
        <SwiperSlide><img className='w-full h-[650px]' src="https://i.ibb.co/PDgPndw/8d794b6b88dd5a37002fd13f658d6a0b.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px]' src="https://i.ibb.co/ygmFnTv/summer-view-highland-meadow.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px]' src="https://i.ibb.co/z5x1XNm/thailand-top-attractions-khao-sok-national-park.jpg" alt="" /></SwiperSlide>
     
        <div className="autoplay-progress" slot="container-end">
        <svg viewBox="" ref={progressCircle}>
            <circle ></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
};

export default Slider;