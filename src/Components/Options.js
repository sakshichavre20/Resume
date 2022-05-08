import React from "react";
import { Styles, useWindowDimensions } from "../Constants/Constants";
import "./Options.css";
import { GoPrimitiveDot } from "react-icons/go";
import { ImageTitle, DotHeader } from "./GlobalComponents";
function Education() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        margin: 20,
        marginTop: 50,
        flexDirection: "column",
      }}
    >
      <a
        style={{
          ...Styles.option_Title,
          fontSize: width < 790 ? width / 20 : 30,
        }}
      >
        Education
      </a>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          display: "flex",
          // height: 100,
          width: width - 70,
          borderRadius: 10,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <a className="title">
          <span style={{ position: "relative", top: 3 }}>
            <GoPrimitiveDot size={18} />
          </span>
          Computer Science Engineering <span>(2019 - current) </span>
        </a>
        <a className="sub_head">
          College Name : Dhole Patil College of Engineering{" "}
        </a>
        <a className="sub_title">
          Second Year : <span>9.5/10.0</span>
        </a>
        <a className="sub_title">
          First Year : <span>9.05/10.0</span>
        </a>

        <a className="title">
          <span style={{ position: "relative", top: 3 }}>
            <GoPrimitiveDot size={18} />
          </span>
          Higher Secondary Education (2017 - 2019)
        </a>
        <a className="sub_head">College Name : Nowrosjee Wadia College</a>
        <a className="sub_title">Score : 69%</a>
        <a className="title">
          <span style={{ position: "relative", top: 3 }}>
            <GoPrimitiveDot size={18} />
          </span>
          Secondary Education (2017)
        </a>
        <a className="sub_head">School Name : St. Francis De Sales School</a>
        <a className="sub_title">Score : 92%</a>
      </div>
    </div>
  );
}
function Skills() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        marginLeft: 20,
        marginRight: 20,

        flexDirection: "column",
      }}
    >
      <a style={{ ...Styles.option_Title }}>Skills</a>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          display: "flex",
          // height: 100,
          width: width - 70,
          borderRadius: 10,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <a className="title">
          <span style={{ position: "relative", top: 3 }}>
            <GoPrimitiveDot size={18} />
          </span>
          Technical Skills
        </a>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 5,
            overflowX: "auto",
          }}
        >
          <ImageTitle src={require("../assets/react.png")} title={"React.Js"} />
          <ImageTitle src={require("../assets/html.png")} title={"Html"} />
          <ImageTitle src={require("../assets/css.png")} title={"CSS.Js"} />
          <ImageTitle
            src={require("../assets/react.png")}
            title={"React Native"}
          />
          <ImageTitle
            src={require("../assets/javascript.png")}
            title={"JavaScript"}
          />
          <ImageTitle
            src={require("../assets/firebase.png")}
            title={"Firebase"}
          />
          <ImageTitle src={require("../assets/python.png")} title={"Python"} />
          <ImageTitle src={require("../assets/c.png")} title={"C"} />
          <ImageTitle src={require("../assets/c++.png")} title={"C++"} />
          <ImageTitle src={require("../assets/node.png")} title={"Node"} />
        </div>
        <a className="title" style={{ marginTop: 20 }}>
          <span style={{ position: "relative", top: 3 }}>
            <GoPrimitiveDot size={18} />
          </span>
          Design Skills
        </a>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            overflowX: "auto",
            marginTop: 5,
          }}
        >
          <ImageTitle src={require("../assets/figma.png")} title={"Figma"} />
          <ImageTitle src={require("../assets/canva.png")} title={"Canva"} />
        </div>
      </div>
    </div>
  );
}
function Projects() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        marginLeft: 20,
        marginRight: 20,

        flexDirection: "column",
      }}
    >
      <a style={{ ...Styles.option_Title }}>Projects</a>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          display: "flex",
          //  height: 100,
          width: width - 70,
          borderRadius: 10,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <DotHeader
          title="Netflix Clone"
          subtitle={"(React Native)"}
          subHead="Built frontend using React- Native and used TMDB API's for integration"
          link={"https://github.com/sakshichavre20/NetFlix-React-Native"}
        />
        <DotHeader
          title="Music App"
          subtitle={"(React Native)"}
          subHead="Built frontend using React- Native and used Spotify API's ."
          link={"https://github.com/sakshichavre20/Music-App"}
        />
        <DotHeader
          title="Netflix App"
          subtitle={"(React)"}
          subHead="Built frontend using React and used Spotify API's ."
          link={"https://github.com/sakshichavre20/Netflix-Clone-Web-REACT-"}
        />
      </div>
    </div>
  );
}
function Experience() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        marginLeft: 20,
        marginRight: 20,

        flexDirection: "column",
      }}
    >
      <a style={{ ...Styles.option_Title }}>Experience</a>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          display: "flex",
          // height: 100,
          width: width - 70,
          borderRadius: 10,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <DotHeader
          title="D-WebBox"
          subtitle="(May 2022 - current)"
          subHead="React Native Developer"
          ongoing={true}
        />
        <DotHeader
          title="QuadB Tech"
          subtitle="(Feb 2022 - current)"
          subHead="React Native Developer"
          ongoing={true}
        />
        <DotHeader
          title="InvestSathi Pvt Ltd"
          subtitle="(Jan 2022 - Feb 2022)"
          subHead="React Native Developer"
          href={
            "https://drive.google.com/drive/folders/1Eiv2-CjMnlZRPWRwIK6x089Ve0E2sEqD"
          }
        />
        <DotHeader
          title="Otomator Technologies"
          subtitle="(July 2021 - Nov 2021)"
          subHead="React Native Developer"
          href={
            "https://drive.google.com/drive/folders/1Eiv2-CjMnlZRPWRwIK6x089Ve0E2sEqD"
          }
        />
        <DotHeader
          title="ShellCode Solutions"
          subtitle="(May 2021 - June 2021)"
          subHead="React Native Developer"
          href={
            "https://drive.google.com/file/d/156KHA2IGpoQKWx2Uk_51dt1Sy0W_PyDz/view"
          }
        />
      </div>
    </div>
  );
}
function Achivements() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        marginLeft: 20,
        marginRight: 20,

        flexDirection: "column",
      }}
    >
      <a style={{ ...Styles.option_Title }}>Achivements</a>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          display: "flex",
          //  height: 100,
          width: width - 70,
          borderRadius: 10,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <DotHeader
          title="Complete React Native in 2021"
          href={
            "https://www.udemy.com/certificate/UC-79381f7a-baa0-428f-b0e6-647c3e5d64a3/"
          }
        />
        <DotHeader
          title="Enhancing Soft Skill"
          href={
            "https://drive.google.com/file/d/1KlTAS9_GuNACFhaOmpYzBPZykv5L3jzY/view"
          }
        />
        <DotHeader
          title="Javascript"
          href={
            "https://drive.google.com/file/d/1Vd5YXX_kL3vVvtDhtdB8Qh9ONdFKkmaV/view"
          }
        />
      </div>
    </div>
  );
}
function Hobbies() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        marginLeft: 20,
        marginRight: 20,

        flexDirection: "column",
      }}
    >
      <a style={{ ...Styles.option_Title }}>Hobbies</a>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          display: "flex",
          height: 100,
          width: width - 70,
          borderRadius: 10,
          flexDirection: "column",
          padding: 10,
        }}
      ></div>
    </div>
  );
}
function GetInTouch() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        marginLeft: 20,
        marginRight: 20,

        flexDirection: "column",
        marginBottom: 20,
      }}
    >
      <a style={{ ...Styles.option_Title }}>GetInTouch</a>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          display: "flex",
          // height: 100,
          width: width - 70,
          borderRadius: 10,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 5,
            overflowX: "auto",
          }}
        >
          <ImageTitle
            href={"mailto:chavresakshi@gmail.com"}
            src={require("../assets/mail.png")}
            title={"Mail"}
          />
          <ImageTitle
            href={"https://github.com/sakshichavre20"}
            src={require("../assets/github.png")}
            title={"Git Hub"}
          />
          <ImageTitle
            src={require("../assets/linkedin.png")}
            title={"Linkedin"}
            href="https://linkedin.com/in/sakshi-chavre"
          />
          <ImageTitle
            src={require("../assets/twitter.png")}
            title={"Twitter"}
            href="https://twitter.com/ChavreSakshi"
          />
          <ImageTitle
            href="https://instagram.com/sakshichavre2011"
            src={require("../assets/insta.png")}
            title={"Instagram"}
          />
        </div>
      </div>
    </div>
  );
}
{
  /* <p align="center">
  <a href="https://twitter.com/ChavreSakshi" target="blank">
    <img
      align="center"
      src="Icons/twitter.svg"
      alt="sakshichavre"
      height="30"
      width="40"
    />
  </a>
  <a href="https://linkedin.com/in/sakshi-chavre" target="blank">
    <img
      align="center"
      src="Icons/linkedin.svg"
      alt="sakshichavre"
      height="30"
      width="40"
    />
  </a>
  <a href="https://instagram.com/sakshichavre2011" target="blank">
    <img
      align="center"
      src="Icons/instagram.svg"
      alt="sakshichavre"
      height="30"
      width="40"
    />
  </a>
</p>; */
}
export {
  Education,
  Skills,
  Projects,
  Experience,
  Achivements,
  Hobbies,
  GetInTouch,
};
