import React from "react";
import { useWindowDimensions } from "../../Constants/Constants";
import "../Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Achivements,
  Education,
  Experience,
  GetInTouch,
  Hobbies,
  Projects,
  Skills,
} from "../Options";
function MobileLanding() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        overflowY: "auto",
        backgroundImage: "radial-gradient(#774C6077, #37254977, #1A1423)",
        // padding: 10,
        //  backgroundImage: "radial-gradient(#212F45,#312244,#4D194D)",
      }}
    >
      {width < 845 && (
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
            cursor: "pointer",
          }}
        >
          <AiOutlineMenu size={23} color={"grey"} />
        </div>
      )}
      <div
        style={{
          display: "flex",
          paddingLeft: 20,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <img
          src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
          style={{ height: 100, width: 100, borderRadius: 200 }}
        />
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              fontSize: 20,
              textShadow: "2px 4px 5px #000",
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            <span style={{ opacity: 0.5, marginRight: 10, textShadow: "none" }}>
              Hello !
            </span>
            <img
              src={require("../../assets/hand.png")}
              className="helloimg"
              style={{ height: 30, width: 30 }}
            />
            <br />
            <span style={{ opacity: 0.5, marginRight: 10, textShadow: "none" }}>
              I'm
            </span>
            Sakshi Chavre
          </a>
          <a
            style={{
              color: "white",
              marginTop: 10,
              lineHeight: 1.4,
              opacity: 0.5,
              textAlign: "center",
            }}
          >
            Computer engineering student, <br /> Full Stack developer!
          </a>
        </div>
      </div>
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achivements />
      <Hobbies />
      <GetInTouch />
    </div>
  );
}

export default MobileLanding;
