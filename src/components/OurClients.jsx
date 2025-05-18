import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const clientImages = [
  "https://namratauniversal.com/img/client-1.jpg",
  "https://namratauniversal.com/img/client-2.jpg",
  "https://namratauniversal.com/img/client-3.jpg",
  "https://namratauniversal.com/img/client-4.jpg",
  "https://namratauniversal.com/img/client-5.jpg",
  "https://namratauniversal.com/img/client-6.jpg",
  "https://namratauniversal.com/img/client-7.jpg",
  "https://namratauniversal.com/img/client-8.jpg",
  "https://namratauniversal.com/img/client-9.png",
  "https://namratauniversal.com/img/client-10.png",
  "https://namratauniversal.com/img/client-11.png",
  "https://namratauniversal.com/img/client-12.png",
  "https://namratauniversal.com/img/client-13.png",
  "https://namratauniversal.com/img/client-14.png",
  "https://namratauniversal.com/img/client-15.png",
  "https://namratauniversal.com/img/client-16.png",
  "https://namratauniversal.com/img/client-17.png",
  "https://namratauniversal.com/img/client-18.png",
  "https://namratauniversal.com/img/client-19.jpeg",
  "https://namratauniversal.com/img/client-20.jpg",
  "https://namratauniversal.com/img/client-21.png",
  "https://namratauniversal.com/img/client-22.png",
  "https://namratauniversal.com/img/client-23.png",
  "https://namratauniversal.com/img/client-24.png",
  "https://namratauniversal.com/img/client-25.jpeg",
  "https://namratauniversal.com/img/client-26.png",
];

const OurClients = () => {
  return (
    <div className="container mx-auto py-10 px-4 bg-white pb-20">
      <div
        className="text-center mb-10"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2 className="text-3xl font-bold text-gray-800">Our Clients 😎</h2>
        <p className="text-gray-500 mt-2">We proudly serve them all</p>
      </div>

      <Swiper
        className="mt-20"
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        data-aos="flip-left"
      >
        {clientImages.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Client ${index + 1}`}
              className="mx-auto object-contain"
              style={{ height: "120px", maxWidth: "150px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurClients;
