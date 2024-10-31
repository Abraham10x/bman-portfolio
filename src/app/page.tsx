import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const tools = [
    {
      id: 1,
      img: "/assets/home/tools/figma.svg",
      title: "Figma logo",
      width: 40,
      height: 40,
    },
    {
      id: 2,
      img: "/assets/home/tools/adobe-illustrator.svg",
      title: "Adobe illustrator Logo",
      width: 60,
      height: 60,
    },
    {
      id: 3,
      img: "/assets/home/tools/adobe-photoshop.svg",
      title: "Adobe photoshop logo",
      width: 60,
      height: 60,
    },
    {
      id: 4,
      img: "/assets/home/tools/notion.svg",
      title: "Notion logo",
      width: 60,
      height: 60,
    },
    {
      id: 5,
      img: "/assets/home/tools/framer.svg",
      title: "Framer logo",
      width: 40,
      height: 40,
    },
  ];

  const skills = [
    {
      id: 1,
      icon: "/assets/home/skills/product.svg",
      alt: "package icon",
      title: "Product Design",
      body: "Designed user-centered products that blend function with aesthetics to elevate brand experiences.",
    },
    {
      id: 2,
      icon: "/assets/home/skills/pen-tool.svg",
      alt: "pen tool icon",
      title: "UI/UX Design",
      body: "Designed intuitive interfaces that connect users with products seamlessly.",
    },
    {
      id: 3,
      icon: "/assets/home/skills/window.svg",
      alt: "window icon",
      title: "Branding",
      body: "Crafted memorable brand identities that resonate and inspire",
    },
    {
      id: 4,
      icon: "/assets/home/skills/gitlab.svg",
      alt: "gitlab logo",
      title: "Logo Design",
      body: "Designed impactful logos that capture a brand's essence at a glance.",
    },
    {
      id: 5,
      icon: "/assets/home/skills/brochure.svg",
      alt: "brochure icon",
      title: "Brochure Design",
      body: "Developed cohesive brand identities that tell stories, build trust, and leave lasting impressions.",
    },
    {
      id: 6,
      icon: "/assets/home/skills/round-web.svg",
      alt: "web icon",
      title: "Website Design",
      body: "Created visually engaging and user-friendly websites that bring brands to life online.",
    },
  ];

  const experience = [
    {
      id: 1,
      img: "/assets/home/brands/Polo.svg",
      alt: "Polo logo",
      width: 200,
      height: 200,
    },
    {
      id: 2,
      img: "/assets/home/brands/Montblanc.svg",
      alt: "Montblanc logo",
      width: 200,
      height: 200,
    },
    {
      id: 3,
      img: "/assets/home/brands/POLO-Avenue.svg",
      alt: "POLO-Avenue logo",
      width: 200,
      height: 200,
    },
    {
      id: 4,
      img: "/assets/home/brands/gaia.svg",
      alt: "Gaia logo",
      width: 200,
      height: 200,
    },
    {
      id: 5,
      img: "/assets/home/brands/Swarovski.svg",
      alt: "Swarovski logo",
      width: 200,
      height: 200,
    },
    {
      id: 6,
      img: "/assets/home/brands/hashtag.svg",
      alt: "hashtag logo",
      width: 200,
      height: 200,
    },
    {
      id: 7,
      img: "/assets/home/brands/partycoo.svg",
      alt: "partycoo logo",
      width: 200,
      height: 200,
    },
    {
      id: 8,
      img: "/assets/home/brands/yoko.svg",
      alt: "yoko logo",
      width: 200,
      height: 200,
    },
  ];

  return (
    <div>
      <div className="container pt-10 sm:pt-14 px-5 sm:px-10 pb-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 gap-y-24 gap-x-14 lg:py-12 rounded-3xl relative">
          <div className="flex flex-col justify-between h-full basis-[50%] my-auto pt-10 lg:pt-0 gap-4 lg:gap-8">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 text-secondary">
              Hello, I’m Kingsley O. Mbilitem
            </h1>
            <p className="font-medium text-base sm:text-lg lg:text-xl">
              Creative Designer | Product Designer | UI/UX Designer
            </p>
            <p className="text-base text-black">
              I can help you create stunning products and visuals. As someone
              who has worked in Tech Industry, Marketing and Graphic Design
              field for over a decade, I know how to create design solutions to
              problems and to capture their users’ attention for a better
              experience.
            </p>
            <div className="flex sm:flex-row mt-4 gap-6">
              <Link href="/resume.pdf" legacyBehavior>
                <a
                  rel="noreferer noopener"
                  target="_blank"
                  type="application/pdf"
                >
                  <button className="bg-primary hover:bg-yellow-200 hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-11 py-5 leading-7 text-lg sm:text-xl rounded-lg shadow-primary/80 shadow-lg">
                    View Portfolio
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative basis-[50%] flex justify-center lg:justify-end">
            <div>
              <Image
                className="basis-full lg:basis-[20%] sm:mx-auto lg:mx-0"
                src="/assets/home/profile.png"
                alt="Kingsley O. Mbilitem"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <h3 className="text-center text-xl tracking-widest uppercase">
            Design Tools
          </h3>
          <div className="flex flex-row gap-10 items-center">
            {tools.map((item) => (
              <Image
                key={item.id}
                src={item.img}
                alt={item.title}
                width={item.width}
                height={item.height}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center my-32">
          <div className="flex flex-col gap-3">
            <h3 className="text-center text-xl tracking-widest uppercase">
              What i do
            </h3>
            <h3 className="font-bold text-center text-xl sm:text-2xl lg:text-4xl">
              My Expertise
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-8">
            {skills.map((item) => (
              <div
                key={item.id}
                className={`rounded-xl flex flex-col items-center text-center gap-4 py-8 px-6 ${
                  item.id % 2 === 0
                    ? "bg-white shadow-gray-200"
                    : "bg-primary shadow-yellow-200"
                } shadow-lg`}
              >
                <Image src={item.icon} alt={item.alt} width={60} height={60} />
                <p className="font-bold text-xl">{item.title}</p>
                <div className="border-2 border-black rounded-xl w-16" />
                <p className="text-sm lg:px-10">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 justify-center w-full">
            <div className="flex gap-3 justify-center">
              <Image
                src="/assets/home/skills/stats/award.svg"
                alt="badge"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-2">
                <p className="text-6xl">10</p>
                <p className="text-[#818181] uppercase text-sm">
                  years of <br /> experience
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <Image
                src="/assets/home/skills/stats/coffee.svg"
                alt="badge"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-2">
                <p className="text-6xl">1,250</p>
                <p className="text-[#818181] uppercase text-sm">
                  completed <br /> projects
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <Image
                src="/assets/home/skills/stats/smile.svg"
                alt="badge"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-2">
                <p className="text-6xl">2,000+</p>
                <p className="text-[#818181] uppercase text-sm">
                  satisfied <br /> clients
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 my-12">
          <h3 className="text-center text-xl tracking-widest uppercase">
            worked with:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
            {experience.map((item) => (
              <Image
                className="mx-auto"
                key={item.id}
                src={item.img}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-36">
          <h3 className="text-center text-xl tracking-widest uppercase">
            what people are saying
          </h3>
          <div className="relative rounded-xl shadow-gray-300 shadow-lg flex flex-col gap-5 pt-10 pb-5 px-8 mt-24">
            <div
              className={`absolute -top-10 left-8 bg-black rounded-full p-5`}
            >
              <Image
                className="m-auto"
                src="/assets/home/review/yellow-quote.svg"
                alt="quote icon"
                width={20}
                height={20}
              />
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="border-t border-black w-full" />
            <div className="flex flex-row gap-4 items-center">
              <Image
                className="rounded-full"
                src="/assets/home/review/jenny.png"
                alt="jenny photo"
                width={90}
                height={90}
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl">Jennifer Obayuwana</p>
                <p className="text-sm">Executive Director Polo Limited</p>
                <Image
                  src="/assets/home/review/stars.svg"
                  alt="stars icon"
                  width={130}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary flex justify-center py-10 my-24">
        <button className="border-2 border-black hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-11 py-5 leading-7 text-lg sm:text-xl rounded-lg">
          View Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
