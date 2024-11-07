import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col justify-between h-full my-auto pt-10 lg:pt-0 gap-4 lg:gap-8 text-center w-full sm:w-3/4 lg:w-1/2 mx-auto">
            <h1 className="font-bold text-3xl sm:text-4xl mt-3">
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
          </div>
          <div className="relative basis-[50%] flex justify-center lg:justify-end">
            <div>
              <Image
                className="mx-auto"
                src="/assets/about/profile.png"
                alt="Kingsley O. Mbilitem"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary pt-16">
        <div className="container pt-10 sm:pt-14 px-5 sm:px-10 pb-8 mx-auto">
          <h3 className="font-bold text-center text-xl sm:text-2xl lg:text-4xl">
            Experience
          </h3>
        </div>
      </div>

      <div className="xl:container pt-10 sm:pt-20 px-5 sm:px-10 pb-8 mx-auto">
        <div className="flex flex-col sm:flex-row gap-20 justify-center">
          <div className="flex flex-col gap-20">
            <div className="flex flex-row gap-3">
              <Image
                src="/assets/about/education.svg"
                alt="education icon"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-4xl">Education</p>
                <p className="text-xl font-bold text-[#8B8787]">
                  BA Graphic Design
                </p>
                <p className="text-[#818181] text-sm">
                  Second Class Upper Division
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <Image
                src="/assets/about/award-trophy.svg"
                alt="trophy icon"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-4xl">Awards</p>
                <p className="text-[#818181] text-sm">
                  Book Cover Designer of the Year 2016
                </p>
                <p className="text-[#818181] text-sm">
                  Creative Designer of the Year 2020
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-start">
            <Image
              src="/assets/about/pen.svg"
              alt="pen tool icon"
              width={80}
              height={80}
            />
            <div className="flex flex-col">
              <p className="font-bold text-4xl">Skills</p>
              <p className="text-[#818181] text-sm  mt-2">
                Adobe (Photoshop, Illustrator, InDesign) <br /> Figma <br />
                Microsoft Office Tools <br /> Problem Solving <br />
                Interpersonal <br /> Customer Focus <br /> Leadership <br />
                Self-Driven <br /> Result-Oriented
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
