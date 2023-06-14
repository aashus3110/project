import "./App.css";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
    </div>
  );
}

export default App;
