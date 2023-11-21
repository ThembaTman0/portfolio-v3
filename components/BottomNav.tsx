import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { BiCodeCurly } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";

const BottomNav = () => {
  return (
    <div className="flexCenter fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 bg-white/20 rounded-full space-x-8 px-6 py-2 backdrop-filter backdrop-blur-sm lg:hidden">
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#work">
        <BiCodeCurly />
      </a>
      <a href="#skills">
        <VscTools />
      </a>
      <a href="#contact">
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default BottomNav;
