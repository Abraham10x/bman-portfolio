import Title from "@/components/projects/Title";
import Image from "next/image";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
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
        <button className="bg-primary hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-20 py-5 leading-7 text-lg sm:text-xl rounded-lg">
          See more
        </button>
      </div>
    </div>
  );
};

export default page;
