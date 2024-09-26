import React from "react";
import ProjectItem from "../ProjectItem";
import cryptoImg from "../assets/cryptoImg.png";
import expediaImg from "../assets/expediaImg.png";
import housingImg from "../assets/housingImg.png";
import netflexImg from "../assets/netflexImg.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minus
        quibusdam dolores nihil velit sequi, suscipit nesciunt nostrum commodi
        amet, soluta explicabo magnam ad culpa excepturi a minima ut molestiae?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={cryptoImg} title="Crypto App" />
        <ProjectItem img={expediaImg} title="Expedia App" />
        <ProjectItem img={housingImg} title="Housing App" />
        <ProjectItem img={netflexImg} title="Netflex App" />
      </div>
    </div>
  );
};

export default Projects;
