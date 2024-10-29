import Link from "next/link";
import { FC } from "react";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiTwitterFill,
} from "react-icons/ri";

const Footer: FC = () => {
  return (
    <footer>
      <div className="container pt-16 mx-auto pb-8 px-5 sm:px-10 2xl:px-0">
        <div className="flex flex-col sm:flex-row justify-between pb-10 text-center sm:text-left gap-y-10">
          <div className="basis-1/2">
            <p className="font-bold text-left text-base sm:text-lg lg:text-xl mt-12 w-full xl:w-[80%]">
              BmanMontage - 2022
            </p>
          </div>
          <div className="flex flex-row space-x-4 text-black justify-start mt-8">
            <Link
              href="https://twitter.com/amehabraham811/"
              rel="noreferer noopener"
              target="_blank"
            >
              <RiTwitterFill
                size={50}
                className="p-2 rounded-full hover:scale-110 hover:-translate-y-2 transition-all delay-150 duration-300 ease-in-out"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ameh-abraham-2553951bb/"
              rel="noreferer noopener"
              target="_blank"
            >
              <RiLinkedinBoxFill
                size={50}
                className="p-2 rounded-full hover:scale-110 hover:-translate-y-2 transition-all delay-150 duration-300 ease-in-out"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ameh-abraham-2553951bb/"
              rel="noreferer noopener"
              target="_blank"
            >
              <RiInstagramFill
                size={50}
                className="p-2 rounded-full hover:scale-110 hover:-translate-y-2 transition-all delay-150 duration-300 ease-in-out"
              />
            </Link>
            <Link href="mailto:amehabraham811@gmail.com">
              <RiMailFill
                size={50}
                className="p-2 rounded-full hover:scale-110 hover:-translate-y-2 transition-all delay-150 duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
