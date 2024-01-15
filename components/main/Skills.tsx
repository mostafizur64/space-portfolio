'use client'
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/Contansts";
import React from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillsText from "../sub/SkillsText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 md:px-0 px-10"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillsText />
      <div className="flex flex-row items-center justify-around flex-warp mt-4 gap-5">
        {Skill_data.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-warp mt-4 gap-5">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-warp mt-4 gap-5">
        {Backend_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-warp mt-4 gap-5">
        {Full_stack.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-warp mt-4 gap-5">
        {Other_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="h-full w-full absolute">
        <div className="h-full w-full z-[10px] opacity-30 flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
