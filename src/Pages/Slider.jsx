
import  { useRef, } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 import img1 from '../assets/banner-1.webp'
 import img2 from '../assets/banner-2.jpg'
 import img3 from '../assets/banner-3.jpg'

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
        className="mySwiper h-[350px] lg:h-[650px] z-10"
      >
        
        <SwiperSlide className='relative'>
         <div className='absolute w-full h-full bg-gradient-to-l from-transparent to-black bg-opacity-50 text-white'>
         <div className='absolute top-1/3 left-20 '>
          <h3 className="text-xl lg:text-3xl font-medium text-white mb-4">Discover the beauty</h3>
          <h1 className="text-3xl lg:text-6xl text-white font-semibold ">Plan a trip to  <br />the adventurous world</h1>
        </div>
         </div>
        <img className='w-full h-[350px] lg:h-[650px]' src={img1} alt="" />
          </SwiperSlide>
        <SwiperSlide className='relative'>
       <div className='absolute w-full h-full bg-gradient-to-l from-transparent to-black bg-opacity-80 text-white'>
       <div className='absolute top-1/3 left-20'>
         <h3 className="text-xl lg:text-3xl font-medium text-white mb-4">Discover the beauty</h3>
          <h1 className="text-3xl lg:text-6xl text-white font-semibold top-3/4">Plan a trip to  <br />the adventurous world</h1>
        </div>
       </div>
          <img className='w-full h-[350px] lg:h-[650px]' src={img2} alt="" />
          </SwiperSlide>
        <SwiperSlide className='relative'>
       <div className='absolute w-full h-full bg-gradient-to-l from-transparent to-black bg-opacity-50 text-white'>
       <div className='absolute top-1/3 left-20 '>
        <h3 className="text-xl lg:text-3xl font-medium text-white mb-4">Discover the beauty</h3>
          <h1 className="text-3xl lg:text-6xl text-white font-semibold top-3/4">Plan a trip to  <br />the adventurous world</h1>
        </div>
       </div>
          <img className='w-full h-[350px] lg:h-[650px]' src={img3} alt="" />
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