"use client";
import { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const Slider: FC = () => {
  const projects = [
    {
      id: 1,
      title: "Hashtag Digital",
      body: "ebsite UI/UX Redesign",
      bg: "/assets/projects/hashtag.png",
      link: "/projects/hashtag",
    },
    {
      id: 2,
      title: "Partycoo",
      body: "Product Design UI/UX",
      bg: "/assets/projects/partycoo.png",
      link: "/projects/partycoo",
    },
    {
      id: 3,
      title: "Swarovski",
      body: "Project Designs",
      bg: "/assets/projects/swarovski.png",
      link: "/projects/swarovski",
    },
    {
      id: 4,
      title: "Montblanc",
      body: "Project Designs",
      bg: "/assets/projects/montblanc.png",
      link: "/projects/montblanc",
    },
    {
      id: 5,
      title: "Polo Limited",
      body: "Project Designs",
      bg: "/assets/projects/polo.png",
      link: "/projects/polo-limited",
    },
    {
      id: 6,
      title: "Polo Avenue",
      body: "Project Designs",
      bg: "/assets/projects/polo-avenue.png",
      link: "/projects/polo-avenue",
    },
    {
      id: 7,
      title: "Branding",
      body: "Digital Branding and Prints",
      bg: "/assets/projects/branding.png",
      link: "/projects/branding",
    },
    {
      id: 8,
      title: "Logos",
      body: "Company Logo Design",
      bg: "/assets/projects/logo.png",
      link: "/projects/logo",
    },
  ];

  return (
    <div>
      <h3 className="font-semibold text-xl sm:text-2xl text-center sm:py-16">
        view more projects
      </h3>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          horizontalClass: "swiper-pagination-horizontal",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: true,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 40,
            centeredSlides: true,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="relative testimonial-swiper px-4 pb-12 w-full mx-auto"
      >
        {projects.map((item) => (
          <SwiperSlide key={item.id} className="py-14">
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.bg})` }}
              className="flex flex-col items-center justify-end h-[20rem] lg:h-[24rem] bg-cover rounded-2xl shadow-yellow-200 shadow-lg pt-8 pb-20 sm:pb-24 lg:pb-32"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 items-center">
                  <p className="font-bold text-2xl lg:text-4xl text-primary">
                    {item.title}
                  </p>
                  <p className="text-white text-xl">{item.body}</p>
                </div>
                <Link legacyBehavior href={item.link}>
                  <button className="rounded-lg border border-primary px-4 py-2 text-xl uppercase font-medium text-white">
                    view project
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
