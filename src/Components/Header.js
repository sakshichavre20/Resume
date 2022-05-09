import React from "react";
import NavBar from "./NavBar";
import "./Header.css";
import { useWindowDimensions } from "../Constants/Constants";
import { AiOutlineMenu } from "react-icons/ai";
function Header() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 40,
        width: "100vw",
      }}
    >
      {/* {width > 845 && <NavBar />}
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
          }}
        >
          <AiOutlineMenu size={23} color={"grey"} />
        </div>
      )} */}
      <div style={{ display: "flex", paddingLeft: 20, alignItems: "center" }}>
        <img
          // src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
          src={require("../../src/assets/profile.jpeg")}
          style={{
            height: 200,
            width: 200,
            borderRadius: 200,
          }}
        />
        <div
          style={{ marginLeft: 20, flexDirection: "column", display: "flex" }}
        >
          <a
            style={{
              fontSize: width < 790 ? width / 20 : 40,
              textShadow: "2px 4px 5px #000",
              lineHeight: 1.4,
            }}
          >
            <span style={{ opacity: 0.5, marginRight: 10, textShadow: "none" }}>
              Hello !
            </span>
            <img
              src={require("../../src/assets/hand.png")}
              className="helloimg"
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
            }}
          >
            Computer engineering student, <br /> Full Stack developer!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
