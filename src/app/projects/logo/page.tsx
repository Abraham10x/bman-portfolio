import Slider from "@/components/projects/Slider";
import Title from "@/components/projects/Title";
import Image from "next/image";

const page = () => {
  const logos = [
    "/assets/projects/logo/logo-1.svg",
    "/assets/projects/logo/logo-2.svg",
    "/assets/projects/logo/logo-3.svg",
    "/assets/projects/logo/logo-4.svg",
    "/assets/projects/logo/logo-5.svg",
    "/assets/projects/logo/logo-6.svg",
    "/assets/projects/logo/logo-7.svg",
    "/assets/projects/logo/logo-8.svg",
    "/assets/projects/logo/logo-9.svg",
    "/assets/projects/logo/logo-10.svg",
    "/assets/projects/logo/logo-11.svg",
    "/assets/projects/logo/logo-12.svg",
    "/assets/projects/logo/logo-13.svg",
    "/assets/projects/logo/logo-14.svg",
    "/assets/projects/logo/logo-15.svg",
  ];
  return (
    <div>
      <div className="relative">
        <Image
          className="absolute w-1/2 sm:w-auto top-[10%] sm:top-[1%] right-0 -z-50"
          alt="fancy image"
          src="/assets/fancy/big-dots.svg"
          width={800}
          height={800}
        />
        <Image
          className="absolute -bottom-[3%] sm:-bottom-[20%] lg:-bottom-[50%] right-0 left-0 w-full -z-50"
          alt="fancy image"
          src="/assets/fancy/three-lines.svg"
          width={20}
          height={20}
        />
        <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
          <Title header="Logo" />
          <div className="w-full mt-32">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-10 mt-32">
              {logos.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="swarovski flyer"
                  width={500}
                  height={500}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center py-10 my-24">
            <button className="bg-primary hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-20 py-5 leading-7 text-lg sm:text-xl rounded-lg">
              See more
            </button>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default page;
