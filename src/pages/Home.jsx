import React from "react";

import About from "../components/about";
import Services from "../components/services";
import Features from "../components/features";
import Results from "../components/results";
import Logos from "../components/logos";

const Home = () => {
   return (
      <>
         <About />
         <Services />
         <Features />
         <Results />
         <Logos />
      </>
   );
};

export default Home;
