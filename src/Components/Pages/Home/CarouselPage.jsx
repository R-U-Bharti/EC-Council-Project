import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselPage = () => {
  return (
    <div className='md:h-[89vh]'>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div className='relative'>
          <img className='h-[50vh] md:h-[89vh]' src="https://www.logsign.com/uploads/cyber_security_protocols_c1974fb1ed.png" />
          <div className='absolute text-white'>
Image 1 Content
          </div>
        </div>
        <div className='relative'>
          <img className='h-[50vh] md:h-[89vh]' src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/09/cybersecurity.jpg.webp" />
          <div className='absolute text-white'>
Image 1 Content
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselPage