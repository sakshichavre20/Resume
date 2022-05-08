import logo from "./logo.svg";
import "./App.css";
import Landing from "./Components/Landing";
import { useWindowDimensions } from "./Constants/Constants";
import MobileLanding from "./Components/MobileView/MobileLanding";
function App() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1A1423",
      }}
    >
      {width < 414 ? <MobileLanding /> : <Landing />}
    </div>
  );
}

export default App;
