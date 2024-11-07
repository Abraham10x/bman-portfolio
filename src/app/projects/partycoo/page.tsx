import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="xl:container pt-10 sm:pt-14 px-5 pb-36 sm:px-10 mx-auto">
        <div className="flex flex-col gap-2">
          <p>Projects</p>
          <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl">
            Partycoo
          </h3>
          <div className="rounded-xl border-2 border-primary w-28 mt-2" />
        </div>
      </div>
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
  );
};

export default page;
