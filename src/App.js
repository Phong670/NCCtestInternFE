import { useState } from "react";
import Content from "./components/Content/Content";
import SlideBar from "./components/Tab/SlideBar";
import "./style.css";

function App() {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);
  console.log("isShowMenuMobile", isShowMenuMobile);
  return (
    <div className="app">
      <SlideBar
        isShowMenuMobile={isShowMenuMobile}
        setIsShowMenuMobile={setIsShowMenuMobile}
      />
      <Content
        isShowMenuMobile={isShowMenuMobile}
        setIsShowMenuMobile={setIsShowMenuMobile}
      />
    </div>
  );
}

export default App;
