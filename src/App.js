import "./App.css";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import { HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
    </HashRouter>
  );
}

export default App;
