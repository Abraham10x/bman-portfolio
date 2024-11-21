import Slider from "@/components/projects/Slider";
import Title from "@/components/projects/Title";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const designs = [
    "/assets/projects/polo-limited/new-year.png",
    "/assets/projects/polo-limited/rolex-novelties.png",
    "/assets/projects/polo-limited/valentines-day.png",
    "/assets/projects/polo-limited/fathers-day-artboard.png",
    "/assets/projects/polo-limited/cartier-artboard.png",
    "/assets/projects/polo-limited/sea-dweller-artboard.png",
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
          className="absolute -bottom-[3%] sm:-bottom-[20%] lg:-bottom-[30%] right-0 left-0 w-full -z-50"
          alt="fancy image"
          src="/assets/fancy/three-lines.svg"
          width={20}
          height={20}
        />
        <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
          <Title header="Polo Limited" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-32">
            {designs.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="swarovski flyer"
                width={500}
                height={500}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3.5">
            <Image
              className="w-full"
              src="/assets/projects/polo-limited/rolex-watches.png"
              alt="swarovski flyer"
              width={500}
              height={500}
            />
            <Image
              className="w-full"
              src="/assets/projects/polo-limited/iconic-watches.png"
              alt="swarovski flyer"
              width={500}
              height={500}
            />
          </div>
          <div className="flex justify-center py-10 my-24">
            <Link
              href="https://www.behance.net/gallery/140816089/My-Graphic-Design-Portfolio "
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <button className="bg-primary hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-20 py-5 leading-7 text-lg sm:text-xl rounded-lg">
                  See more
                </button>
              </a>
            </Link>
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
