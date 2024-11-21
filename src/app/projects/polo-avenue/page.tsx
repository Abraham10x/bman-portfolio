import Slider from "@/components/projects/Slider";
import Title from "@/components/projects/Title";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const designs = [
    "/assets/projects/polo-avenue/christmas-creative.png",
    "/assets/projects/polo-avenue/denim-jackets-artboard.png",
    "/assets/projects/polo-avenue/fathers-day-artboard.png",
    "/assets/projects/polo-avenue/offwhite-wanted-sneakers-artboard.png",
    "/assets/projects/polo-avenue/offwhite-artboard.png",
    "/assets/projects/polo-avenue/whats-new-valentino-artboard.png",
    "/assets/projects/polo-avenue/new-cassablanca-Tshirt-artboard.png",
    "/assets/projects/polo-avenue/mid-season-sales.png",
    "/assets/projects/polo-avenue/elegant-bew-arrivals-artboard.png",
  ];
  return (
    <div>
      <div className="relative">
        <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
          <Title header="Polo Avenue" />
          <Image
            className="absolute w-1/2 sm:w-auto top-[10%] sm:top-[1%] right-0 -z-50"
            alt="fancy image"
            src="/assets/fancy/big-dots.svg"
            width={800}
            height={800}
          />
          <Image
            className="absolute -bottom-[3%] sm:-bottom-[25%] lg:-bottom-[40%] right-0 left-0 w-full -z-50"
            alt="fancy image"
            src="/assets/fancy/three-lines.svg"
            width={20}
            height={20}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-32">
            {designs.map((item, index) => (
              <Image
                className={`${
                  index === 7 ? "row-span-2 col-span-2 h-full object-cover" : ""
                } w-full`}
                key={index}
                src={item}
                alt="polo avenue flyer"
                width={500}
                height={500}
              />
            ))}
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
