import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";
import Video from "./components/video";
import About from "./components/about";
import Services from "./components/services";
import Features from "./components/features";
import Results from "./components/results";

function App() {
   return (
      <>
         <Menu />
         <Video />
         <About />
         <Services />
         <Features />
         <Results />
      </>
   );
}

export default App;
