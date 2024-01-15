import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Portfolio
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next js Portfolio"
          description="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam molestias voluptas minima nisi exercitationem, architecto accusamus excepturi magnam officiis odit quasi repellendus facilis. Hic ipsam voluptate incidunt fugit est veritatis."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive website Cards"
          description="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam molestias voluptas minima nisi exercitationem, architecto accusamus excepturi magnam officiis odit quasi repellendus facilis. Hic ipsam voluptate incidunt fugit est veritatis."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space theme website"
          description="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam molestias voluptas minima nisi exercitationem, architecto accusamus excepturi magnam officiis odit quasi repellendus facilis. Hic ipsam voluptate incidunt fugit est veritatis."
        />
      </div>
    </div>
  );
};

export default Project;
