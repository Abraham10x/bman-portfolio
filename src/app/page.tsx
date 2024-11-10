"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  const tools = [
    {
      id: 1,
      img: "/assets/home/tools/figma.svg",
      title: "Figma logo",
      width: 40,
      height: 40,
    },
    {
      id: 2,
      img: "/assets/home/tools/adobe-illustrator.svg",
      title: "Adobe illustrator Logo",
      width: 60,
      height: 60,
    },
    {
      id: 3,
      img: "/assets/home/tools/adobe-photoshop.svg",
      title: "Adobe photoshop logo",
      width: 60,
      height: 60,
    },
    {
      id: 4,
      img: "/assets/home/tools/notion.svg",
      title: "Notion logo",
      width: 60,
      height: 60,
    },
    {
      id: 5,
      img: "/assets/home/tools/framer.svg",
      title: "Framer logo",
      width: 40,
      height: 40,
    },
  ];

  const skills = [
    {
      id: 1,
      icon: "/assets/home/skills/product.svg",
      alt: "package icon",
      title: "Product Design",
      body: "Designed user-centered products that blend function with aesthetics to elevate brand experiences.",
    },
    {
      id: 2,
      icon: "/assets/home/skills/pen-tool.svg",
      alt: "pen tool icon",
      title: "UI/UX Design",
      body: "Designed intuitive interfaces that connect users with products seamlessly.",
    },
    {
      id: 3,
      icon: "/assets/home/skills/window.svg",
      alt: "window icon",
      title: "Branding",
      body: "Crafted memorable brand identities that resonate and inspire",
    },
    {
      id: 4,
      icon: "/assets/home/skills/gitlab.svg",
      alt: "gitlab logo",
      title: "Logo Design",
      body: "Designed impactful logos that capture a brand's essence at a glance.",
    },
    {
      id: 5,
      icon: "/assets/home/skills/brochure.svg",
      alt: "brochure icon",
      title: "Brochure Design",
      body: "Developed cohesive brand identities that tell stories, build trust, and leave lasting impressions.",
    },
    {
      id: 6,
      icon: "/assets/home/skills/round-web.svg",
      alt: "web icon",
      title: "Website Design",
      body: "Created visually engaging and user-friendly websites that bring brands to life online.",
    },
  ];

  const experience = [
    {
      id: 1,
      img: "/assets/home/brands/Polo.svg",
      alt: "Polo logo",
      width: 200,
      height: 200,
    },
    {
      id: 2,
      img: "/assets/home/brands/Montblanc.svg",
      alt: "Montblanc logo",
      width: 200,
      height: 200,
    },
    {
      id: 3,
      img: "/assets/home/brands/POLO-Avenue.svg",
      alt: "POLO-Avenue logo",
      width: 200,
      height: 200,
    },
    {
      id: 4,
      img: "/assets/home/brands/gaia.svg",
      alt: "Gaia logo",
      width: 200,
      height: 200,
    },
    {
      id: 5,
      img: "/assets/home/brands/Swarovski.svg",
      alt: "Swarovski logo",
      width: 200,
      height: 200,
    },
    {
      id: 6,
      img: "/assets/home/brands/hashtag.svg",
      alt: "hashtag logo",
      width: 200,
      height: 200,
    },
    {
      id: 7,
      img: "/assets/home/brands/partycoo.svg",
      alt: "partycoo logo",
      width: 200,
      height: 200,
    },
    {
      id: 8,
      img: "/assets/home/brands/yoko.svg",
      alt: "yoko logo",
      width: 200,
      height: 200,
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sundayson Palmer",
      jobTitle: "Church Committee Lead",
      profile: "/assets/home/review/image/sundayson-palmer.png",
      review: `Plant the heavens assembly is a religious body that has 
        been patronizing bman Designs and creativity. His designs has 
        been able to align with our vision and elevate our events. 
        Highly recommended!`,
    },
    {
      id: 2,
      name: "Samson Samuels",
      jobTitle: "Co-founder Hashtag Digital",
      profile: "/assets/home/review/image/samson-samuels.png",
      review: `Kingsley AKA Bman is a man of exceptional talent, 
        he knows his onions so well, and his works speaks volume. 
        I give it to him! 💯`,
    },
    {
      id: 3,
      name: "Louis Ejiofor",
      jobTitle: "CEO District Media Company",
      profile: "/assets/home/review/image/louis-ejiofor.png",
      review: `District Media Company is consistently impressed 
        by Bman Montage Designs’ creativity and professionalism. 
        Their designs perfectly capture our vision and elevate 
        our brand. Highly recommended!`,
    },
    {
      id: 4,
      name: "ABosede Ikujuni",
      jobTitle: "CEO BoMaI",
      profile: "/assets/home/review/image/tade.png",
      review: `I’ve worked with Bman Kingsley over the years in the 
        fashion industry and when it comes to premium graphic design 
        he is a master at transforming marketing conceptual ideas 
        into something significant & classy.
`,
    },
    {
      id: 5,
      name: "Nneka Viola",
      jobTitle: "CEO Nayka Collections",
      profile: "/assets/home/review/image/nneka-viola.png",
      review: `Working with Bman Montage has been a game-changer 
        for our brand. Their team is highly skilled, creative, and 
        always delivers designs that perfectly capture our vision. 
        From logos to marketing materials, they consistently exceed 
        expectations and provide exceptional value.`,
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="xl:container pt-10 px-5 sm:px-10 pb-8 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 gap-y-24 gap-x-14 lg:py-12 rounded-3xl">
            <div className="flex flex-col justify-between h-full basis-[50%] my-auto pt-10 lg:pt-0 gap-4 lg:gap-8">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 text-secondary">
                Hello, I’m Kingsley O. Mbilitem
              </h1>
              <p className="font-medium text-base sm:text-lg lg:text-xl">
                Creative Designer | Product Designer | UI/UX Designer
              </p>
              <p className="text-base text-black">
                I can help you create stunning products and visuals. As someone
                who has worked in Tech Industry, Marketing and Graphic Design
                field for over a decade, I know how to create design solutions
                to problems and to capture their users’ attention for a better
                experience.
              </p>
              <div className="flex sm:flex-row mt-4 gap-6">
                <Link href="/projects" legacyBehavior>
                  <button className="bg-primary hover:bg-yellow-200 hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-11 py-5 leading-7 text-lg sm:text-xl rounded-lg shadow-primary/80 shadow-lg">
                    View Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className="basis-[50%] flex justify-center lg:justify-end">
              <div>
                <Image
                  className="basis-full lg:basis-[20%] sm:mx-auto lg:mx-0"
                  src="/assets/home/profile.png"
                  alt="Kingsley O. Mbilitem"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
          <Image
            className="absolute bottom-1/3 lg:top-10 right-0 -z-50 w-3/5 sm:w-auto"
            alt="fancy image"
            src="/assets/fancy/dots.svg"
            width={450}
            height={450}
          />

          <div className="flex flex-col mt-8 sm:mt-0 gap-8 items-center">
            <h3 className="text-center text-xl tracking-widest uppercase">
              Design Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 items-center justify-center">
              {tools.map((item) => (
                <Image
                  key={item.id}
                  src={item.img}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          className="absolute -top-[5%] sm:-top-[20%] lg:-top-[45%] xl:-top-[90%] right-0 left-0 w-full -z-50"
          alt="fancy image"
          src="/assets/fancy/three-lines.svg"
          width={20}
          height={20}
        />
        <div className="xl:container px-5 sm:px-10 mx-auto">
          <div className="flex flex-col gap-8 items-center my-32">
            <div className="flex flex-col gap-3">
              <h3 className="text-center text-xl tracking-widest uppercase">
                What i do
              </h3>
              <h3 className="font-bold text-center text-xl sm:text-2xl lg:text-4xl">
                My Expertise
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-8">
              {skills.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-xl flex flex-col items-center text-center gap-4 py-8 px-6 ${
                    item.id % 2 === 0
                      ? "bg-white shadow-gray-200"
                      : "bg-primary shadow-yellow-200"
                  } shadow-lg`}
                >
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={60}
                    height={60}
                  />
                  <p className="font-bold text-xl">{item.title}</p>
                  <div className="border-2 border-black rounded-xl w-16" />
                  <p className="text-sm lg:px-10">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-8 justify-center items-center w-full">
              <div className="flex gap-3 justify-center">
                <Image
                  src="/assets/home/skills/stats/award.svg"
                  alt="badge"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-6xl">10</p>
                  <p className="text-[#818181] uppercase text-sm">
                    years of <br /> experience
                  </p>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <Image
                  src="/assets/home/skills/stats/coffee.svg"
                  alt="badge"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-6xl">1,250</p>
                  <p className="text-[#818181] uppercase text-sm">
                    completed <br /> projects
                  </p>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <Image
                  src="/assets/home/skills/stats/smile.svg"
                  alt="badge"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-6xl">2,000+</p>
                  <p className="text-[#818181] uppercase text-sm">
                    satisfied <br /> clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:container px-5 sm:px-10 mx-auto">
        <div className="flex flex-col gap-4 my-12">
          <h3 className="text-center text-xl tracking-widest uppercase">
            worked with:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
            {experience.map((item) => (
              <Image
                className="mx-auto"
                key={item.id}
                src={item.img}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          className="absolute top-0 left-0 -z-50"
          alt="fancy image"
          src="/assets/fancy/small-dots.svg"
          width={300}
          height={300}
        />
        <Image
          className="hidden sm:block absolute -top-[20%] right-0 -z-50"
          alt="fancy image"
          src="/assets/fancy/circles.svg"
          width={350}
          height={350}
        />
        <div className="flex flex-col gap-8 mt-36 relative z-40">
          <h3 className="text-center text-xl tracking-widest uppercase">
            what people are saying
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
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 40,
                centeredSlides: true,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="relative testimonial-swiper px-4 pb-12 w-full mx-auto"
          >
            {reviews.map((data) => (
              <SwiperSlide key={data.id} className="py-14">
                <div className="relative bg-white rounded-xl shadow-gray-300 shadow-lg flex flex-col gap-5 pt-10 pb-5 px-8 mt-24 mx-4 h-72">
                  <div
                    className={`absolute -top-10 left-8 ${
                      data.id % 2 === 0 ? "bg-black" : "bg-primary"
                    } rounded-full p-5 z-10`}
                  >
                    <Image
                      className="m-auto"
                      src={
                        data.id % 2 === 0
                          ? "/assets/home/review/yellow-quote.svg"
                          : "/assets/home/review/black-quote.svg"
                      }
                      alt="quote icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="text-sm">{data.review}</p>
                  <div className="absolute bottom-6 flex flex-col gap-5">
                    <div className="border-t border-black w-full" />
                    <div className="flex flex-row gap-4 items-center">
                      <Image
                        className="rounded-full"
                        src={data.profile}
                        alt={`${data.name} photo`}
                        width={90}
                        height={90}
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-xl">{data.name}</p>
                        <p className="text-sm">{data.jobTitle}</p>
                        <Image
                          src="/assets/home/review/stars.svg"
                          alt="stars icon"
                          width={130}
                          height={130}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="bg-primary flex justify-center py-10 my-24">
        <Link href="/projects" legacyBehavior>
          <button className="border-2 border-black hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-11 py-5 leading-7 text-lg sm:text-xl rounded-lg">
            View Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
