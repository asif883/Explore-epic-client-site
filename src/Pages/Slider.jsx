
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
        className="mySwiper h-[350px] lg:h-[650px] rounded-lg"
      >
        
        <SwiperSlide className='relative'>
        <div className='absolute top-1/3 left-20'>
          <h3 className="text-xl lg:text-3xl font-medium text-white mb-4">Discover the beauty</h3>
          <h1 className="text-3xl lg:text-6xl text-white font-semibold ">Plan a trip to  <br />the adventurous world</h1>
        </div>
          <img className='w-full h-[350px] lg:h-[650px]' src="https://i.ibb.co/wLgvLcN/1-9.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide className='relative'>
        <div className='absolute top-1/3 left-20'>

         <h3 className="text-xl lg:text-3xl font-medium text-white mb-4">Discover the beauty</h3>
          <h1 className="text-3xl lg:text-6xl text-white font-semibold top-3/4">Plan a trip to  <br />the adventurous world</h1>
        </div>
          <img className='w-full h-[350px] lg:h-[650px]' src="https://i.ibb.co/ygmFnTv/summer-view-highland-meadow.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide className='relative'>
        <div className='absolute top-1/3 left-20 '>
        <h3 className="text-xl lg:text-3xl font-medium text-white mb-4">Discover the beauty</h3>
          <h1 className="text-3xl lg:text-6xl text-white font-semibold top-3/4">Plan a trip to  <br />the adventurous world</h1>
        </div>
          <img className='w-full h-[350px] lg:h-[650px]' src="https://i.ibb.co/7CtRGSL/aesthetic-nature-dxhvdcplq0s02jat.jpg" alt="" />
          </SwiperSlide>
     
        <div className="autoplay-progress" slot="container-end">
        <svg  ref={progressCircle}>
            <circle ></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
};

export default Slider;