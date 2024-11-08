import Slider from "@/components/projects/Slider";
import Title from "@/components/projects/Title";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative">
        <div className="xl:container pt-10 sm:pt-14 px-5 pb-36 sm:px-10 mx-auto">
          <Title header="Partycoo" />
        </div>
        <Image
          className="absolute w-1/2 sm:w-auto top-[10%] sm:top-[1%] right-0 -z-50"
          alt="fancy image"
          src="/assets/fancy/big-dots.svg"
          width={800}
          height={800}
        />
        <Image
          className="absolute -bottom-[3%] sm:-bottom-[8%] lg:-bottom-[15%] right-0 left-0 w-full -z-50"
          alt="fancy image"
          src="/assets/fancy/three-lines.svg"
          width={20}
          height={20}
        />
        <Image
          className="w-full"
          src="/assets/projects/partycoo/screen-1.png"
          alt="partycoo design"
          width={1200}
          height={1000}
        />
        <Image
          className="w-full"
          src="/assets/projects/partycoo/screen-2.png"
          alt="partycoo design"
          width={1200}
          height={1000}
        />
        <Image
          className="w-full"
          src="/assets/projects/partycoo/screen-3.png"
          alt="partycoo design"
          width={1200}
          height={1000}
        />
        <Image
          className="w-full"
          src="/assets/projects/partycoo/screen-4.png"
          alt="partycoo design"
          width={1200}
          height={1000}
        />

        <div className="flex justify-center py-10 my-24">
          <button className="bg-primary hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-20 py-5 leading-7 text-lg sm:text-xl rounded-lg">
            See more
          </button>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default page;
