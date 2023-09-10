import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import Image from 'next/image'
// import "../../../public/assets"
const images = [
    '/assets/bg1.avif',
    '/assets/bg2.jpg',
    '/assets/bg3.jpg',
    '/assets/bg4.jpg',
    
    
  ];
  

const CarouselComp = () => {
  return (
    <>
      <Head>
        <style>
          {`
                    .carousel .thumb img {
                        width: 10rem !important;
                        height: 5rem !important;
}

                    .carousel .slide img {
                        max-height: 800px;
                    width: auto;
}`}
        </style>
      </Head>

      <Carousel
        showStatus={true}
        showArrows={true}
        autoPlay={true}
        swipeable={true}
        interval={1000}
        infiniteLoop={true}
        swipeScrollTolerance={50}
        preventMovementUntilSwipeScrollTolerance={true}
        emulateTouch={true}
        dynamicHeight={true}
        thumbWidth={150}
        showThumbs={false}
        centerMode={true}
        
      >
        {images ? (
          images.map((image, index) => {
            return (
              <div key={index}>
                {" "}
                <Image src={image} width={944} height={944} className=" object-cover" />
              </div>
            );
          })
        ) : (
          <Image />
        )}
      </Carousel>
    </>
  );
};

export default CarouselComp;
