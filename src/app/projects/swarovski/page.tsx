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
    <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
      <div className="flex flex-col gap-2 pb-32">
        <p>Projects</p>
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl">Swarovski</h3>
        <div className="rounded-xl border-2 border-primary w-28 mt-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {designs.map((item, index) => (
          <Image
            className={`${
              index === 2 || index === 7 ? "row-span-2 h-full object-cover" : ""
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
  );
};

export default page;
