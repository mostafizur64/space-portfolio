import React from "react";
import { FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg md:p-[15px] p-2 md:px-0 px-10 md:mt-20 mt-4">
      <div className="w-full flex flex-col  items-center justify-center m-auto">
        <div className="w-full h-full flex md:flex-row md:items-center md:justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col  justify-start">
            <div className="font-bold text-[16px] ">Community</div>
            <p className="flex flex-row items-center  my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row  my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col  justify-start">
            <div className="font-bold text-[16px] ">Social Media</div>
            <p className="flex flex-row  my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row  my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row  my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col  justify-start">
            <div className="font-bold text-[16px] ">About</div>
            <p className="flex flex-row items-center  my-[15px] cursor-pointer">
              <span className="text-[15px] ">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ">
                mostafizurm01@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div> 
      <div className="mb-[20px] py-4 text-white text-center text-[15px]">
        WebChain Dev & copyWrite 2024 All right reserve.
      </div>
    </div>
  );
};

export default Footer;
