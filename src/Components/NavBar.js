import React, { useState } from "react";
import "./Navbar.css";
import { useWindowDimensions } from "../Constants/Constants";
import { GiSkills, GiDiamondTrophy } from "react-icons/gi";
import { FaGraduationCap, FaPencilRuler } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { MdEmojiSymbols } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
function NavBar({
  color,
  eduClick,
  skillClick,
  exClick,
  proClick,
  achClick,
  hobClick,
  conClick,
}) {
  const [navHover, setNavHover] = useState("");
  const { width, height } = useWindowDimensions();

  return (
    <>
      {width > 1220 ? (
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            position: "fixed",
            right: 30,
            top: 30,
            borderRadius: 10,
            backgroundColor: "#37254977",
            boxShadow: "0px -3px 5px #fff4,0px 5px 10px #000",
          }}
        >
          <a
            className="navbar_option"
            onClick={eduClick}
            onMouseEnter={() => setNavHover("Education")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Education" ? 5 : null,
              boxShadow:
                navHover === "Education"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          >
            Education
          </a>
          <a
            className="navbar_option"
            onClick={skillClick}
            onMouseEnter={() => setNavHover("Skills")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Skills" ? 5 : null,
              boxShadow:
                navHover === "Skills"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          >
            Skills
          </a>
          <a
            className="navbar_option"
            onClick={proClick}
            onMouseEnter={() => setNavHover("Projects")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Projects" ? 5 : null,
              boxShadow:
                navHover === "Projects"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          >
            Projects
          </a>
          <a
            className="navbar_option"
            onClick={exClick}
            onMouseEnter={() => setNavHover("Experience")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Experience" ? 5 : null,
              boxShadow:
                navHover === "Experience"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          >
            Experience
          </a>
          <a
            className="navbar_option"
            onClick={achClick}
            onMouseEnter={() => setNavHover("Achivements")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Achivements" ? 5 : null,
              boxShadow:
                navHover === "Achivements"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          >
            Achivements
          </a>
          <a
            className="navbar_option"
            onClick={hobClick}
            onMouseEnter={() => setNavHover("Hobbies")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Hobbies" ? 5 : null,
              boxShadow:
                navHover === "Hobbies"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          >
            Hobbies
          </a>
          <a
            className="navbar_option"
            onClick={conClick}
            onMouseEnter={() => setNavHover("Get in Touch")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Get in Touch" ? 5 : null,
              boxShadow:
                navHover === "Get in Touch"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          >
            Get in Touch
          </a>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            position: "fixed",
            right: 30,
            top: 30,
            borderRadius: 10,
            backgroundColor: "#37254977",
            boxShadow: "0px -3px 5px #fff4,0px 5px 10px #000",
          }}
          className="navbar_option"
        >
          <FaGraduationCap
            color={"grey"}
            size={24}
            className="icon_options"
            onClick={eduClick}
            onMouseEnter={() => setNavHover("Education")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Education" ? 5 : null,
              boxShadow:
                navHover === "Education"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          />

          <GiSkills
            color={"grey"}
            size={24}
            onClick={skillClick}
            className="icon_options"
            onMouseEnter={() => setNavHover("Skills")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Skills" ? 5 : null,
              boxShadow:
                navHover === "Skills"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          />
          <FaPencilRuler
            color={"grey"}
            onClick={proClick}
            size={22}
            className="icon_options"
            onMouseEnter={() => setNavHover("Projects")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Projects" ? 5 : null,
              boxShadow:
                navHover === "Projects"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          />
          <RiUserStarFill
            color={"grey"}
            onClick={exClick}
            size={24}
            className="icon_options"
            onMouseEnter={() => setNavHover("Experience")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Experience" ? 5 : null,
              boxShadow:
                navHover === "Experience"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          />
          <GiDiamondTrophy
            color={"grey"}
            size={24}
            onClick={achClick}
            className="icon_options"
            onMouseEnter={() => setNavHover("Achivements")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Achivements" ? 5 : null,
              boxShadow:
                navHover === "Achivements"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          />
          <MdEmojiSymbols
            color={"grey"}
            onClick={hobClick}
            size={24}
            className="icon_options"
            onMouseEnter={() => setNavHover("Hobbies")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Hobbies" ? 5 : null,
              boxShadow:
                navHover === "Hobbies"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          />
          <IoMdContacts
            color={"grey"}
            onClick={conClick}
            size={28}
            className="icon_options"
            onMouseEnter={() => setNavHover("Get in Touch")}
            onMouseOut={() => setNavHover("")}
            style={{
              borderRadius: navHover === "Get in Touch" ? 5 : null,
              boxShadow:
                navHover === "Get in Touch"
                  ? "0px -3px 5px #fff4,0px 5px 10px #000"
                  : null,
            }}
          />
        </div>
      )}
    </>
  );
}

export default NavBar;
