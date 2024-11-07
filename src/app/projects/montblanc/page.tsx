import Title from "@/components/projects/Title";
import Image from "next/image";

const page = () => {
  const designs = [
    "/assets/projects/montblanc/fathers-day.png",
    "/assets/projects/montblanc/eid-maulud.png",
    "/assets/projects/montblanc/workers-day.png",
    "/assets/projects/montblanc/fathers-day-artboard.png",
    "/assets/projects/montblanc/independence-day.png",
    "/assets/projects/montblanc/merry-christmas.png",
  ];
  return (
    <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
      <Title header="Montblanc" />
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
          src="/assets/projects/montblanc/tech-gadgets.png"
          alt="swarovski flyer"
          width={500}
          height={500}
        />
        <Image
          className="w-full"
          src="/assets/projects/montblanc/happy-democracy.png"
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
