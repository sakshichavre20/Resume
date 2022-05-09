import React, { useState, useEffect, useRef } from "react";
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
import { useWindowDimensions } from "../Constants/Constants";
import { AiOutlineMenu } from "react-icons/ai";
import NavBar from "./NavBar";
function Landing() {
  const { width, height } = useWindowDimensions();
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      console.log(window.scrollTop);
      if (window.scrollTop >= 300) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const eduRef = useRef(null);
  const skillRef = useRef(null);
  const hobRef = useRef(null);
  const proRef = useRef(null);
  const expRef = useRef(null);
  const achivRef = useRef(null);
  const getRef = useRef(null);

  const executeScroll = () => eduRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll
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
      {width > 845 && (
        <NavBar
          color={window.scrollY > 1000 ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.8)"}
          eduClick={() => eduRef.current.scrollIntoView()}
          exClick={() => expRef.current.scrollIntoView()}
          skillClick={() => skillRef.current.scrollIntoView()}
          achClick={() => achivRef.current.scrollIntoView()}
          hobClick={() => hobRef.current.scrollIntoView()}
          proClick={() => proRef.current.scrollIntoView()}
          conClick={() => getRef.current.scrollIntoView()}
        />
      )}
      {/* {width < 845 && (
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            position: "fixed",
            right: 30,
            top: 30,
            borderRadius: 10,
            padding: 8,
            backgroundColor: "#37254977",
            boxShadow: "0px -3px 5px #fff4,0px 5px 10px #000",
          }}
        >
          <AiOutlineMenu size={23} color={"grey"} />
        </div>
      )} */}
      <Header />
      <div ref={eduRef}>
        <Education />
      </div>
      <div ref={skillRef}>
        <Skills />
      </div>
      <div ref={expRef}>
        <Experience />
      </div>
      <div ref={proRef}>
        <Projects />
      </div>
      <div ref={achivRef}>
        <Achivements />
      </div>
      <div ref={hobRef}>
        <Hobbies />
      </div>
      <div ref={getRef}>
        <GetInTouch />
      </div>
    </div>
  );
}

export default Landing;
