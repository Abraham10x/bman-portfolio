import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hashtag Digital",
      body: "ebsite UI/UX Redesign",
      bg: "/assets/projects/hashtag.png",
      link: "/projects/hashtag",
    },
    {
      id: 2,
      title: "Partycoo",
      body: "Product Design UI/UX",
      bg: "/assets/projects/partycoo.png",
      link: "/projects/partycoo",
    },
    {
      id: 3,
      title: "Swarovski",
      body: "Project Designs",
      bg: "/assets/projects/swarovski.png",
      link: "/projects/swarovski",
    },
    {
      id: 4,
      title: "Montblanc",
      body: "Project Designs",
      bg: "/assets/projects/montblanc.png",
      link: "/projects/montblanc",
    },
    {
      id: 5,
      title: "Polo Limited",
      body: "Project Designs",
      bg: "/assets/projects/polo.png",
      link: "/projects/polo-limited",
    },
    {
      id: 6,
      title: "Polo Avenue",
      body: "Project Designs",
      bg: "/assets/projects/polo-avenue.png",
      link: "/projects/polo-avenue",
    },
    {
      id: 7,
      title: "Branding",
      body: "Digital Branding and Prints",
      bg: "/assets/projects/branding.png",
      link: "/projects/branding",
    },
    {
      id: 8,
      title: "Logos",
      body: "Company Logo Design",
      bg: "/assets/projects/logo.png",
      link: "/projects/logo",
    },
  ];

  return (
    <div className="relative">
      <Image
        className="absolute -top-[3%] sm:-top-[8%] lg:-top-[16%]  xl:-top-[25%] right-0 left-0 w-full -z-50"
        alt="fancy image"
        src="/assets/fancy/three-lines.svg"
        width={20}
        height={20}
      />
      <Image
        className="absolute w-1/2 sm:w-auto top-[10%] sm:top-[30%] right-0 -z-50"
        alt="fancy image"
        src="/assets/fancy/big-dots.svg"
        width={500}
        height={500}
      />
      <div className="xl:container pt-10 sm:pt-32 px-5 sm:px-10 pb-8 mx-auto">
        <h3 className="font-bold text-2xl lg:text-4xl">Projects</h3>
        <div className="my-20 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-5 lg:gap-20">
          {projects.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.bg})` }}
              className="flex flex-col items-center justify-end h-[28rem] lg:h-[31rem] bg-cover rounded-2xl shadow-yellow-200 shadow-lg pt-8 pb-32"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 items-center">
                  <p className="font-bold text-2xl lg:text-4xl text-primary">
                    {item.title}
                  </p>
                  <p className="text-white text-xl">{item.body}</p>
                </div>
                <Link legacyBehavior href={item.link}>
                  <button className="rounded-lg border border-primary px-4 py-2 text-xl uppercase font-medium text-white">
                    view project
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
