import Title from "@/components/projects/Title";
import Image from "next/image";

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
    <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
      <Title header="Polo Avenue" />
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
        <button className="bg-primary hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-20 py-5 leading-7 text-lg sm:text-xl rounded-lg">
          See more
        </button>
      </div>
    </div>
  );
};

export default page;
