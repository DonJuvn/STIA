import React from "react";
import Projects from "../components/projects";
import Works from "../components/works";
import Docs from "../components/docs";
import Clients from "../components/clients";

const ProjectsPage = () => {
   return (
      <>
         <div id="border"></div>
         <Projects />
         <Works />
         <Docs />
         <Clients />
      </>
   );
};

export default ProjectsPage;
