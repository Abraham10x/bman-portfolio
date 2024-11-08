import Slider from "@/components/projects/Slider";
import Title from "@/components/projects/Title";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative">
        <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
          <Title header="Hashtag Digital" />
        </div>
        <Image
          className="w-full"
          src="/assets/projects/hashtag/screen-1.png"
          alt="hashtag digital design"
          width={1200}
          height={1000}
        />
        <Image
          className="w-full"
          src="/assets/projects/hashtag/screen-2.png"
          alt="hashtag digital design"
          width={1200}
          height={1000}
        />
        <Image
          className="w-full"
          src="/assets/projects/hashtag/screen-3.png"
          alt="hashtag digital design"
          width={1200}
          height={1000}
        />

        <div className="flex justify-center py-10 my-24">
          <button className="bg-primary hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-10 sm:px-20 py-5 leading-7 text-lg sm:text-xl rounded-lg">
            See more
          </button>
        </div>

        <Image
          className="absolute bottom-0 sm:-bottom-[4%] lg:-bottom-[20%] right-0 left-0 w-full -z-50"
          alt="fancy image"
          src="/assets/fancy/three-lines.svg"
          width={20}
          height={20}
        />
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default page;
