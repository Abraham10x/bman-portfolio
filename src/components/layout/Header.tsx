"use client";
import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/resume.pdf", label: "Resumé" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/resume.pdf") return false; // Don't mark hash links as active
    return pathname === path;
  };

  return (
    <div className="bg-[url('/assets/fancy/nav-gradient.svg')] bg-no-repeat bg-cover bg-center py-3 relative">
      <Image
        className="absolute top-0 left-0 -z-40"
        alt="fancy image"
        src="/assets/fancy/single-line.svg"
        width={1500}
        height={1500}
      />
      <div className="w-full top-0 left-0 sticky sm:px-10 z-50">
        <div className="md:flex items-center justify-between py-4 px-7 sm:px-0 xl:container mx-auto">
          <Link legacyBehavior href="/">
            <figure>
              <Image
                className="w-1/4 sm:w-1/2 md:w-full z-[999] cursor-pointer"
                alt="logo"
                src="/logo.svg"
                width={500}
                height={500}
              />
            </figure>
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-8 cursor-pointer lg:hidden"
          >
            {open ? (
              <button className="header-nav-toggle off-nav-is-active mt-2">
                <span className="screen-reader"></span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            ) : (
              <button className="header-nav-toggle mt-2">
                <span className="screen-reader"></span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            )}
          </div>

          <ul
            className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[2] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-[4.8rem] sm:top-[6rem] bg-white" : "top-[-50rem]"
            }`}
            onClick={() => setOpen(false)}
          >
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7"
              >
                <Link legacyBehavior href={link.href}>
                  <div className="flex flex-col gap-1 cursor-pointer">
                    <a
                      className={`md:px-6 lg:px-3 hover:font-semibold duration-500 text-base lg:text-lg relative
                        ${isActive(link.href) ? "font-bold" : ""}
                      ${
                        isActive(link.href)
                          ? "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-secondary"
                          : ""
                      }`}
                    >
                      {link.label}
                    </a>
                    <div
                      className={`${
                        isActive(link.href)
                          ? "border-2 border-primary rounded-xl"
                          : ""
                      }`}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
