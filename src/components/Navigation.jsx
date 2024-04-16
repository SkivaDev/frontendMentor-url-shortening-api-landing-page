import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center gap-[46px] mt-12 px-[1.4125rem] md:px-[2.475rem] w-full max-w-[1190px] mx-auto bg-slate-500">
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
        } md:flex flex-col md:flex-row justify-between items-center absolute md:relative gap-8 md:gap-0 p-8 md:p-0 top-1/2 md:top-0 left-1/2 md:left-0 translate-x-[-50%] translate-y-[20%] md:transform-none bg-white md:bg-transparent w-full`}
      >
        <ul className="flex flex-col md:flex-row gap-[27.12px] md:mr-[2.9rem] text-[15px] text-red font-bold tracking-[1.4px]">
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
        <div>
          <a href="">Login</a>
          <a
            href="/"
            className="py-[7px] px-[22px] hover:bg-amber-600 md:hover:bg-yellow bg-yellow md:bg-white border rounded-full text-[1.0125rem]  font-fraunces font-bold tracking-[-0.0437rem] transition-all"
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
