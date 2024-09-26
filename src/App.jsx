import { useState } from "react";
import Sideway from "./components/Sideway";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Sideway />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
