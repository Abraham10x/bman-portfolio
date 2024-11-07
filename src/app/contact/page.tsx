import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

const page = () => {
  return (
    <div className="xl:container pt-10 sm:pt-14 px-5 sm:px-10 mx-auto">
      <div className="flex flex-col justify-between h-full my-auto pt-10 lg:pt-0 gap-4 lg:gap-8 text-center w-full sm:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="font-bold text-3xl sm:text-4xl mt-3">Get In Touch</h1>
        <p className="text-base text-black">
          Whether you’re looking to start a new project, discuss ideas, or just
          say hello, I'd love to connect. With a passion for impactful design
          and a commitment to collaboration, I'm here to help bring your vision
          to life. Feel free to reach out—I’m excited to hear from you!
        </p>
      </div>

      <div className="bg-[#F8F8F8] flex flex-col sm:flex-row gap-7 shadow-gray-300 shadow-lg rounded-2xl p-8 mt-20 mb-24">
        <div className="basis-2/5 bg-primary rounded-2xl px-10 py-14">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-2xl">Contact Information</h3>
            <p>
              Whether you’re looking to start a new project, discuss ideas, or
              just say hello, I'd love to connect.
            </p>
          </div>
          <div className="flex flex-col gap-8 mt-10">
            <div className="flex gap-4 items-center">
              <MdPhone size={25} />
              <p>+351 920 621 914</p>
            </div>
            <div className="flex gap-4 items-center">
              <MdEmail size={25} />
              <p>bmanmontage@gmail.com</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaLocationDot size={25} />
              <p>Faro, Portugal</p>
            </div>
          </div>
        </div>
        <div className="basis-3/5 my-auto py-16">
          <form className="flex flex-col gap-10">
            <div className="flex flex-col sm:flex-row justify-between gap-16">
              <div className="basis-1/2 flex flex-col gap-2">
                <label className="text-[#8B8787] font-medium">Your Name</label>
                <input
                  className="w-full bg-[#F8F8F8] border-b border-black text-xl placeholder:text-xl placeholder:text-black placeholder:font-bold py-2"
                  placeholder="John Doe"
                />
              </div>
              <div className="basis-1/2 flex flex-col gap-2">
                <label className="text-[#8B8787] font-medium">Your Email</label>
                <input
                  className="w-full bg-[#F8F8F8] border-b border-black text-xl placeholder:text-xl placeholder:text-black placeholder:font-bold py-2"
                  placeholder="hello@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#8B8787] font-medium">Your Subject</label>
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
            <button className="w-1/3 bg-primary hover:bg-yellow-200 hover:scale-110 transition delay-150 duration-300 ease-in-out font-bold px-8 sm:px-11 py-5 leading-7 text-lg sm:text-xl rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
