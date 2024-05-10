import React from "react";

const ShorteningSection = () => {
  return (
    <section className="w-full bg-light-gray">
      <div className="flex flex-col w-full max-w-[1190px] mx-auto px-[23.6px] md:px-[39.6px] pb-[120px]">
        <Form />
        <div></div>
      </div>
    </section>
  );
};

const Form = () => {
  return (
    <form className="w-full bg-indigo-700 flex flex-col md:flex-row justify-between items-center gap-[16px] md:gap-[25px] px-[24px] md:px-[66px] py-[25px] md:py-[50px] mt-[-80px] md:mt-[-84px] rounded-xl">
      <div className="w-full md:flex-1 bg-white h-full px-[16px] md:px-[30px] py-[10px] md:pt-[20px] md:pb-[17px] text-[19px] font-medium rounded-[7px] tracking-[0.5px] md:tracking-normal">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="w-full bg-transparent text-[15px] md:text-[20px]"
        />
        <label htmlFor=""></label>
      </div>
      <button
        type="button"
        className="w-full md:w-auto bg-cyan text-white py-[8px] md:py-[15px] px-[40px] text-[20px] font-bold rounded-[.4375rem] tracking-[-0.99px] md:tracking-normal"
      >
        Shorten It!
      </button>
    </form>
  );
};

export default ShorteningSection;
