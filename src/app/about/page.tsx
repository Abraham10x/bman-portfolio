import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="xl:container pt-10 sm:pt-20 px-5 sm:px-10 mx-auto">
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
                className="mx-auto w-full sm:w-auto"
                src="/assets/about/profile.png"
                alt="Kingsley O. Mbilitem"
                width={1200}
                height={1200}
              />
            </div>
            <Image
              className="absolute top-5 right-10 -z-50 w-1/2 sm:w-auto"
              alt="fancy image"
              src="/assets/fancy/medium-dots.svg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="bg-primary pt-16">
        <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 pb-8 mx-auto flex flex-col items-center gap-16">
          <h3 className="font-bold text-center text-xl sm:text-2xl lg:text-4xl">
            Experience
          </h3>
          {/*  Timeline */}
          <div>
            {/*  Item */}
            <div className="flex gap-x-3">
              {/*  Left Content */}
              <div className="w-1/2 text-end">
                <span className="text-base sm:text-xl font-bold text-black">
                  Senior Product designer / UI/UX Designer
                </span>
              </div>
              {/*  End Left Content */}

              {/*  Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-black">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-black"></div>
                </div>
              </div>
              {/*  End Icon */}

              {/*  Right Content */}
              <div className="w-1/2 grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-bold text-black text-base sm:text-xl">
                  Hashtag Digital - July 2022 till date
                </h3>
                <ul className="list-disc ml-5 mt-4">
                  <li>Plan and implement new designs.</li>
                  <li>Optimize existing user interface designs.</li>
                  <li>Test for intuitivity and experience.</li>
                  <li>
                    Communicate with clients to understand their business goals
                    and objectives.
                  </li>
                  <li>
                    Develop technical and business requirements and always
                    strive to deliver intuitive and user-centered solutions.
                  </li>
                  <li>
                    Combine creativity with an awareness of the design elements.
                    Create prototypes for new product ideas.
                  </li>
                  <li>
                    Test new ideas before implementing. Conduct an ongoing user
                    research.
                  </li>
                </ul>
              </div>
              {/*  End Right Content */}
            </div>
            {/*  End Item */}

            {/*  Item */}
            <div className="flex gap-x-3">
              {/*  Left Content */}
              <div className="w-1/2 text-end">
                <span className="text-base sm:text-xl font-bold text-black">
                  Senior Creative Designer
                </span>
              </div>
              {/*  End Left Content */}

              {/*  Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-black">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-black"></div>
                </div>
              </div>
              {/*  End Icon */}

              {/*  Right Content */}
              <div className="w-1/2 grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-bold text-black text-base sm:text-xl">
                  Montblanc - April 2020 till date
                </h3>
                <ul className="list-disc ml-5 mt-4">
                  <li>
                    Studying design briefs and determining requirements;
                    conceptualizing visuals based on requirements.
                  </li>
                  <li>
                    Preparing rough drafts and presenting ideas; developing
                    illustrations, logos and other designs using software or by
                    hand.
                  </li>
                  <li>
                    Creating posters, websites, logos, brochures, magazines &
                    many other materials to communicate ideas & information
                    visually.
                  </li>
                  <li>
                    Using the appropriate colors and layouts for each graphic
                    and amending designs after feedback.
                  </li>
                </ul>
              </div>
              {/*  End Right Content */}
            </div>
            {/*  End Item */}

            {/*  Item */}
            <div className="flex gap-x-3">
              {/*  Left Content */}
              <div className="w-1/2 text-end">
                <span className="text-base sm:text-xl font-bold text-black">
                  Senior Creative Designer
                </span>
              </div>
              {/*  End Left Content */}

              {/*  Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-black">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-black"></div>
                </div>
              </div>
              {/*  End Icon */}

              {/*  Right Content */}
              <div className="w-1/2 grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-bold text-black text-base sm:text-xl">
                  Swarovski - September 2019 till date
                </h3>
                <ul className="list-disc ml-5 mt-4">
                  <li>
                    Studying design briefs and determining requirements;
                    conceptualizing visuals based on requirements.
                  </li>
                  <li>
                    Illustrating concepts by designing examples of art
                    arrangement, type, size & style & submitting them for
                    approval.
                  </li>
                  <li>Communicating with clients about layouts & designs.</li>
                  <li>
                    Planning concepts by studying relevant information &
                    materials.
                  </li>
                </ul>
              </div>
              {/*  End Right Content */}
            </div>
            {/*  End Item */}

            {/*  Item */}
            <div className="flex gap-x-3">
              {/*  Left Content */}
              <div className="w-1/2 text-end">
                <span className="text-base sm:text-xl font-bold text-black">
                  Senior Graphic/UI/UX Designer
                </span>
              </div>
              {/*  End Left Content */}

              {/*  Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-black">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-black"></div>
                </div>
              </div>
              {/*  End Icon */}

              {/*  Right Content */}
              <div className="w-1/2 grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-bold text-black text-base sm:text-xl">
                  Polo Limited - February 2019 till date
                </h3>
                <ul className="list-disc ml-5 mt-4">
                  <li>
                    Creating posters, websites, logos, brochures, magazines &
                    many other materials to communicate ideas & information
                    visually with the following brands under Polo Limited:
                    Piaget, Rolex, Cartier, Chopard, Roger Dubuis, MontBlanc,
                    Franck Muller, Tag Heuer, Longines, Frederique Constant,
                    Bovet, Omega, Balmain, Breguet, Jacobs & Co., Hirsch,
                    Messika Jewelry, Arnold & Sons, Audemars Piguet, IWC
                    Watches, etc.
                  </li>
                  <li>
                    Preparing rough drafts and presenting ideas; developing
                    illustrations, logos and other designs using software or by
                    hand.
                  </li>
                  <li>
                    Designing user flows and wireframes; creating a low fidelity
                    representation of a design. Creating prototypes; generating
                    an interactive final version of the product pre-development,
                    which is either clickable or tangible.
                  </li>
                </ul>
              </div>
              {/*  End Right Content */}
            </div>
            {/*  End Item */}
          </div>
          {/*  End Timeline */}
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
