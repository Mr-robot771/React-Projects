function AboutPage() {
  return (
    <>
      <div className="mb-10">
        <div>
          <div className="text-[60px] font-semibold text-center">About Me</div>
        </div>
        <div className="flex gap-20 mx-30 mt-10">
          <div className="flex flex-1">
            <img src="./profilepic.jpg" className="w-full h-80 object-cover" />
          </div>
          <div className="flex-3">
            <p className="text-[20px] mb-5">
              I’m Sushil, an aspiring programmer who has just started his
              journey into the world of coding. Technology has always fascinated
              me, and now I’m learning step by step to turn that fascination
              into real skills. Even though I’m a beginner, I believe every line
              of code I write brings me closer to becoming not just a developer
              but a creator of meaningful solutions.
            </p>
            <p className="text-[20px]">
              My goal is bigger than just finding a job in tech — I want to
              master this field, explore deeply, and invent things that make a
              difference. I’m passionate about learning in simple, practical
              ways and applying my knowledge to real-world challenges. This page
              is part of my journey, and I’m excited to share what I learn along
              the way.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-30 mb-10">
        <div className="text-[60px] text-center font-semibold">
          My Expertise
        </div>
        <div>
          <div className="flex items-center gap-20">
            <h2 className="text-[30px] w-30 font-semibold">JavaScript</h2>
            <hr className="w-[80%] h-2 border-none bg-linear-[270deg,#DF8908_10%,#B415FF_100%] " />
          </div>
          <div className="flex items-center gap-20">
            <h2 className="text-[30px] w-30 font-semibold">ReactJS</h2>
            <hr className="w-[60%] h-2 border-none bg-linear-[270deg,#DF8908_10%,#B415FF_100%] " />
          </div>
          <div className="flex items-center gap-20">
            <h2 className="text-[30px] w-30 font-semibold">MongoDB</h2>
            <hr className="w-[50%] h-2 border-none bg-linear-[270deg,#DF8908_10%,#B415FF_100%]" />
          </div>
          <div className="flex items-center gap-20">
            <h2 className="text-[30px] w-30 font-semibold">ExpressJS</h2>
            <hr className="w-[30%] h-2 border-none bg-linear-[270deg,#DF8908_10%,#B415FF_100%]" />
          </div>
          <div className="flex items-center gap-20">
            <h2 className="text-[30px] w-30 font-semibold">NodeJS</h2>
            <hr className="w-[70%] h-2 border-none bg-linear-[270deg,#DF8908_10%,#B415FF_100%]" />
          </div>
        </div>
      </div>

      <div>
        <div className="text-[60px] text-center font-semibold mb-5">
          Achievements
        </div>
        <div className="flex justify-between mx-30 items-center">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[50px] font-semibold">2+</h1>
            <p className="text-[28px]">Years of Experience</p>
          </div>
          <hr className="w-[10%] rotate-90" />

          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[50px] font-semibold">20+</h1>
            <p className="text-[28px]">Projects Completed</p>
          </div>
          <hr className="w-[10%] rotate-90" />

          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[50px] font-semibold">10+</h1>
            <p className="text-[28px]">Happy Clients</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
