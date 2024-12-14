import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";
import Video from "./components/video";
import About from "./components/about";
import Services from "./components/services";
import Features from "./components/features";

function App() {
   return (
      <>
         <Menu />
         <Video />
         <About />
         <Services />
         <Features />
      </>
   );
}

export default App;
