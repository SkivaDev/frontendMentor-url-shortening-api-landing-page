import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center gap-[46px] mt-[48px] px-[22.6px] md:px-[39.6px] w-full max-w-[1190px] mx-auto">
      <a href="/">
        <img
          className="max-w-max"
          src="./images/logo.svg"
          alt="sunnyside logo"
        />
      </a>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-between items-center absolute md:relative gap-8 md:gap-0 p-8 md:p-0 top-1/2 md:top-0 left-1/2 md:left-0 translate-x-[-50%] translate-y-[20%] md:transform-none md:bg-transparent w-full`}
      >
        <ul className="flex flex-col md:flex-row gap-[31.12px] md:mr-[46.4px] text-[15px] font-bold">
          <li>
            <a href="/" className="hover:text-dark-grayish-blue transition-all">
              Features
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-grayish-blue transition-all">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-grayish-blue transition-all">
              Resources
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-[34px]">
          <a href="" className="font-bold">Login</a>
          <a
            href="/"
            className="block py-[8px] px-[24px] hover:bg-amber-600 md:hover:bg-yellow bg-yellow md:bg-cyan rounded-full text-[16.2px]  font-fraunces font-bold tracking-[-0.6992px] transition-all"
          >
            Sign Up
          </a>
        </div>
      </div>
      <button
        className="block md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src="./images/icon-hamburger.svg" alt="hamburger button" />
      </button>
    </nav>
  );
};

export default Navigation;
