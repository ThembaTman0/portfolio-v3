import React from "react";

const About = () => {
  return (
    <section className="flexCenter max-container padding-container flex flex-col gap-20 py-10 pb-32 lg:py-20 xl:flex-row">
      <div className="text-center lg:max-w-[1012px] xl:max-w-[512px]">
        <p className="bg-gradient-to-r from-blue-500 via-purple-700 to-orange-400 inline-block text-transparent bg-clip-text text-6xl ">
          About
        </p>
        <p className="pt-20">
          Tech enthusiast and{" "}
          <span className="bg-gradient-to-r from-green-800 to-green-400 inline-block text-transparent bg-clip-text">
            FNB
          </span>{" "}
          software developer passionate about AI, ML, and web development.
          Crafting innovative solutions and embracing the exciting realms of
          technology with a touch of fun.
        </p>
      </div>
    </section>
  );
};

export default About;
