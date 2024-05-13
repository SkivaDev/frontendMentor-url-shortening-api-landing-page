import React from "react";

const ShorteningSection = () => {
  return (
    <section className="w-full bg-light-gray">
      <div className="flex flex-col w-full max-w-[1190px] mx-auto px-[23.6px] md:px-[39.6px] pb-[90px] md:pb-[120px]">
        <Form />
        <div></div>
      </div>
    </section>
  );
};

const Form = () => {
  return (
    <form className="w-full flex flex-col md:flex-row justify-between gap-[16px] md:gap-[24px] px-[24px] md:pl-[64px] md:pr-[65px] py-[25px] md:py-[52px] mt-[-80px] md:mt-[-84px] rounded-[10px] bg-dark-violet bg-pattern bg-no-repeat bg-cover">
      <div className="w-full md:flex-1 bg-white h-full px-[16px] md:px-[30px] py-[10px] md:pt-[18px] md:pb-[15px] text-[19px] font-medium rounded-[10px] tracking-[0.5px] md:tracking-normal">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="w-full bg-transparent text-[15px] md:text-[20px]"
        />
        <label htmlFor=""></label>
      </div>
      <button
        type="button"
        className="w-full md:w-[188px] md:flex md:justify-center md:items-center py-[8px] px-[40px] md:p-0 text-[20px] font-bold rounded-[10px] tracking-[-0.99px] md:tracking-normal bg-cyan text-white hover:bg-light-cyan transition-all"
      >
        Shorten It!
      </button>
    </form>
  );
};

export default ShorteningSection;
