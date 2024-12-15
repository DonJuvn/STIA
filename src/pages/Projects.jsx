import React from "react";
import Projects from "../components/projects";
import Works from "../components/works";
import Docs from "../components/docs";

const ProjectsPage = () => {
   return (
      <>
         <div id="border"></div>
         <Projects />
         <Works />
         <Docs />
      </>
   );
};

export default ProjectsPage;
