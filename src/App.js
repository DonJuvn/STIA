import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";
import Video from "./components/video";
import About from "./components/about";
import Services from "./components/services";
import Features from "./components/features";
import Results from "./components/results";
import Logos from "./components/logos";
import Footer from "./components/footer";

function App() {
   return (
      <>
         <Menu />
         <Video />
         <About />
         <Services />
         <Features />
         <Results />
         <Logos />
         <Footer />
      </>
   );
}

export default App;
