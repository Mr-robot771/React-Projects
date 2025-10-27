import React from "react";

function Hero() {
  return (
    <>
      <div className="Hero flex items-center flex-col gap-8">
        <img
          className="w-[250px] h-[250px] rounded-full object-cover mt-10"
          src="./profilepic.jpg"
          alt="profilepic"
        />
        <h1 className="text-[70px] text-center w-[90%]">
          <span className="bg-linear-[270deg,#DF8908_10%,#B415FF_100%] bg-clip-text text-transparent">
            Hey!,I'm Sushil Pariyar,
          </span>
          a fullstack web developer from Nepal.
        </h1>
        <p className="w-[70%] text-center text-[24px] font-semibold">
          I am a fullstack web developer from Butwal,Nepal with 2 years of
          experience.
        </p>
        <div className="hero-action flex items-center gap-20 text-[22px] font-semibold mb-20">
          <button className="hero-connect bg-linear-[267deg,#DA7C25_0.36%,#B923E1_102.06%] px-4 py-4 rounded-full text-[18px] cursor-pointer transition delay-150 duration-100 ease-out hover:-translate-y-1 hover:scale-105 font-bold">
            Connect With Me
          </button>
          <button className="hero-resume px-4 py-4 cursor-pointer border-2 text-[18px] rounded-full hover:border-[#B415ff] transition delay-150 duration-100 ease-out hover:-translate-y-1 hover:scale-105">
            My Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
