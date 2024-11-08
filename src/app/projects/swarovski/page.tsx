import Slider from "@/components/projects/Slider";
import Title from "@/components/projects/Title";
import Image from "next/image";

const page = () => {
  const designs = [
    "/assets/projects/swarovski/ring-It-artboard.png",
    "/assets/projects/swarovski/brunch-invite.png",
    "/assets/projects/swarovski/trendy-pieces.png",
    "/assets/projects/swarovski/ramadan-kareem.png",
    "/assets/projects/swarovski/easter-celebration.png",
    "/assets/projects/swarovski/green-envy-artboard.png",
    "/assets/projects/swarovski/democracy-day.png",
    "/assets/projects/swarovski/engagement-rings-artboard.png",
    "/assets/projects/swarovski/merry-christmas.png",
    "/assets/projects/swarovski/birthday-gift-artboard.png",
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
          className="absolute -bottom-[3%] sm:-bottom-[20%] lg:-bottom-[35%] right-0 left-0 w-full -z-50"
          alt="fancy image"
          src="/assets/fancy/three-lines.svg"
          width={20}
          height={20}
        />
        <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
          <Title header="Swarovski" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-32">
            {designs.map((item, index) => (
              <Image
                className={`${
                  index === 2 || index === 7
                    ? "row-span-2 h-full object-cover"
                    : ""
                } w-full`}
                key={index}
                src={item}
                alt="swarovski flyer"
                width={500}
                height={500}
              />
            ))}
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
