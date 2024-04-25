import React from "react";

const ShorteningSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full max-w-[1190px] mx-auto px-[23.6px] md:px-[39.6px] pb-[500px]">
        <Form />
        <div></div>
      </div>
    </section>
  );
};

const Form = () => {
  return (
    <form className="w-full bg-indigo-700 flex justify-between items-center gap-[25px] px-[66px] py-[50px] mt-[-84px] rounded-xl">
      <div className="flex-1 bg-black h-full px-[30px] py-[20px] text-[19px] font-medium rounded-xl">
        <input type="text" placeholder="Shorten a link here..."  className="w-full bg-transparent"/>
        <label htmlFor=""></label>
      </div>
      <button type="button" className="bg-red py-[15px] px-[40px] text-[20px] font-bold rounded-xl">Shorten It!</button>
    </form>
  );
};

export default ShorteningSection;
