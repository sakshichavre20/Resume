import React from "react";
import Header from "./Header";
import {
  Education,
  Skills,
  Projects,
  Experience,
  Achivements,
  Hobbies,
  GetInTouch,
} from "./Options";

function Landing() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundImage: "radial-gradient(#774C6077, #37254977, #1A1423)",
        //  backgroundImage: "radial-gradient(#212F45,#312244,#4D194D)",
      }}
    >
      <Header />
      <Education />
      <Skills />
      <Experience />
      <Projects />

      <Achivements />
      <Hobbies />
      <GetInTouch />
    </div>
  );
}

export default Landing;
