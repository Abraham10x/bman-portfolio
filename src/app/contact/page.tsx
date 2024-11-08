import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import Image from "next/image";
import Slider from "@/components/projects/Slider";

const page = () => {
  return (
    <div>
      <div className="relative">
        <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
          <div className="flex flex-col justify-between h-full my-auto pt-10 lg:pt-0 gap-4 lg:gap-8 text-center w-full sm:w-3/4 lg:w-1/2 mx-auto">
            <h1 className="font-bold text-3xl sm:text-4xl mt-3">
              Get In Touch
            </h1>
            <p className="text-base text-black">
              Whether you’re looking to start a new project, discuss ideas, or
              just say hello, I'd love to connect. With a passion for impactful
              design and a commitment to collaboration, I'm here to help bring
              your vision to life. Feel free to reach out—I’m excited to hear
              from you!
            </p>
          </div>

          <div className="bg-[#F8F8F8] flex flex-col lg:flex-row gap-14 shadow-gray-300 shadow-lg rounded-2xl p-4 lg:p-8 mt-20 mb-24">
            <div className="basis-2/5 bg-primary rounded-2xl px-5 sm:px-10 py-14 relative">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-2xl">Contact Information</h3>
                <p>
                  Whether you’re looking to start a new project, discuss ideas,
                  or just say hello, I'd love to connect.
                </p>
              </div>
              <div className="flex flex-col gap-8 mt-10  z-50">
                <div className="flex gap-4 items-center">
                  <MdPhone size={25} />
                  <p>+351 920 621 914</p>
                </div>
                <div className="flex gap-4 items-center break-words">
                  <MdEmail size={25} />
                  <p>bmanmontage@gmail.com</p>
                </div>
                <div className="flex gap-4 items-center">
                  <FaLocationDot size={25} />
                  <p>Faro, Portugal</p>
                </div>
              </div>
              <Image
                className="absolute bottom-0 right-0 w-1/2 lg:w-auto"
                alt="fancy image"
                src="/assets/fancy/white-dots.svg"
                width={450}
                height={450}
              />
            </div>
            <div className="basis-3/5 my-auto py-16">
              <form className="flex flex-col gap-10">
                <div className="flex flex-col sm:flex-row justify-between gap-16">
                  <div className="basis-1/2 flex flex-col gap-2">
                    <label className="text-[#8B8787] font-medium">
                      Your Name
                    </label>
                    <input
                      className="w-full bg-[#F8F8F8] border-b border-black text-xl placeholder:text-xl placeholder:text-black placeholder:font-bold py-2"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="basis-1/2 flex flex-col gap-2">
                    <label className="text-[#8B8787] font-medium">
                      Your Email
                    </label>
                    <input
                      className="w-full bg-[#F8F8F8] border-b border-black text-xl placeholder:text-xl placeholder:text-black placeholder:font-bold py-2"
                      placeholder="hello@gmail.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#8B8787] font-medium">
                    Your Subject
                  </label>
                  <input
                    className="w-full bg-[#F8F8F8] border-b border-black text-xl placeholder:text-xl placeholder:text-black placeholder:font-bold py-2"
                    placeholder="I want to hire you quickly"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-primary font-medium">Messages</label>
                  <textarea
                    className="w-full bg-[#F8F8F8] border-b border-primary text-xl placeholder:text-xl placeholder:text-black py-2"
                    placeholder="I want to hire you quickly"
                    rows={3}
                  />
                </div>
                <button className="w-full sm:w-1/2 lg:w-1/3 bg-primary hover:bg-yellow-200 hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-11 py-5 leading-7 text-lg sm:text-xl rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 w-full h-[55rem] sm:h-[50rem] lg:h-[36rem] bg-primary -z-50" />
      </div>
      <div className="mt-40 relative">
        <Image
          className="absolute bottom-[50%] sm:bottom-0 lg:-bottom-[50%] right-0 left-0 w-full -z-50"
          alt="fancy image"
          src="/assets/fancy/three-lines.svg"
          width={20}
          height={20}
        />
        <Slider />
      </div>
    </div>
  );
};

export default page;
