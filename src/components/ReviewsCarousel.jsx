import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    name: "Premlata Patel",
    title: "Woman",
    image: "https://namratauniversal.com/img/review/Premlata Patel.jpg",
    review:
      "Namrata universal is good organisation. And very helpful staff in this organisation.so I am very happy. Because they are available each and every time & always reply your message and calls.",
  },
  {
    name: "Mamta Rani",
    title: "Businesswoman",
    image: "https://namratauniversal.com/img/review/Mamta Rani.jpg",
    review:
      "Nice Experience with NAMRATA UNIVERSAL. Really satisfied with services. I can say this is top website design company in Noida.",
  },
  {
    name: "Ekaa Architects",
    title: "Business",
    image: "https://namratauniversal.com/img/review/Ekaa Architects.jpg",
    review:
      "Good & Professional Company for Website Designing, ERP, CRM & Digital Marketing Services.",
  },
  {
    name: "Kritee Dixit",
    title: "Businesswoman",
    image: "https://namratauniversal.com/img/review/Kritee Dixit.jpg",
    review:
      "What a Team NAMRATA UNIVERSAL really good service provider - completely down to earth. Completely satisfied with your service.",
  },
  {
    name: "Prateek Jaiswal",
    title: "Human",
    image: "https://namratauniversal.com/img/review/Prateek Jaiswal.jpg",
    review:
      "They are amazing working for Website industry. Thanks a lot to provide us world class website in short on budget. I can say you are top.",
  },
  {
    name: "Somya Gupta",
    title: "Businesswoman",
    image: "https://namratauniversal.com/img/review/Somya Gupta.jpg",
    review:
      "We hired NAMRATA UNIVERSAL for website Develop & Designing and the rate was also in our budget. His ideas were new and fresh. Nice Website Design by NAMRATA UNIVERSAL.",
  },
  {
    name: "Amit Tamang",
    title: "Businessman",
    image: "https://namratauniversal.com/img/review/Amit Tamang.jpg",
    review:
      "Guys, this is best company for website designing. I am very grateful towards Namrata universal for your good work and support.. Thank you mam.",
  },
  {
    name: "Suraj",
    title: "Human",
    image: "https://namratauniversal.com/img/review/suraj.jpg",
    review:
      "Namrata universal are the best website creater, I have ever and I would suggest more n more people for website designing.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f7f5f2] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Quote className="mx-auto text-indigo-600 w-8 h-8 mb-3" />
          <h2 className="text-4xl font-bold text-[#1e1919]">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Hear directly from our partners and clients about
            <br />
            their experience working with us.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="pb-14" // Add padding bottom if needed
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition h-[350px] flex flex-col items-center text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-indigo-100"
                />
                <h4 className="text-lg font-semibold text-[#1e1919]">
                  {review.name}
                </h4>
                <p className="text-sm text-indigo-600">{review.title}</p>
                <p className="mt-3 text-gray-600 text-sm">"{review.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
