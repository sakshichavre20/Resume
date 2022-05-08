import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Styles = {
  option_Title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 0,
    zIndex: 5,
    marginTop: 30,
    marginBottom: 10,
    textShadow: "2px 4px 5px #000",
  },
};

const Colors = {
  green: "yellow green",
  blue: "cornflowerblue",
};
export { useWindowDimensions, Styles, Colors };
