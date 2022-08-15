import React from "react";
import AboutMe from "./AboutMe";
import TechStacks from "./TechStacks";

function About() {
  return (
    <div className="pb-8 pt-4 xl:container px-10 sm:px-16 lg:px-20 mx-auto">
      <AboutMe />
      <TechStacks />
    </div>
  );
}

export default About;
