import React from "react";
import close from "../../asset/left.png";

function SlideBar({ isShowMenuMobile, setIsShowMenuMobile }) {
  const nameTab = ["Home", "Services", "News", "Blog", "Contact"];
  var pathArray = window.location.pathname.split("/");
  console.log(pathArray[1]);

  return (
    <div
      className={`slide-bar ${
        isShowMenuMobile ? "show-slide-bar-mobile" : "hidden-slide-bar-mobile"
      }`}
    >
      <ul className="container-tab">
        <div
          className="button-close "
          onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
        >
          <img src={close} alt="" />
        </div>
        {nameTab?.map((name) => (
          <li>
            <a
              href={name.toLowerCase()}
              style={{
                color:
                  pathArray[1] === name.toLowerCase() ? "white" : "#AAAAAA",
              }}
            >
              <div className="text-name">
                <span>{name}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SlideBar;
