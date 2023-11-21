import React from "react";

const Hero = () => {
  return (
    <section className="flexCenter max-container padding-container flex flex-col gap-20 py-10 pb-32 lg:py-20 xl:flex-row">
      <div className="text-center lg:max-w-[1012px] xl:max-w-[512px]">
        <p className="bg-gradient-to-r from-blue-500 via-purple-700 to-orange-400 inline-block text-transparent bg-clip-text text-6xl ">
          Hi, I'm Themba.
        </p>
        <p className="mt-20">
          Im currently at{" "}
          <span className="bg-gradient-to-r from-green-800 to-green-400 inline-block text-transparent bg-clip-text">
            FNB,
          </span>{" "}
          actively contributing to the dynamic world of banking as a Java
          developer, where I combine my expertise to craft innovative solutions
          and push the boundaries of what's possible in financial technology.
        </p>
      </div>
    </section>
  );
};

export default Hero;
