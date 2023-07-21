import React, { useState } from "react";

function Tab() {
  const nameTab = ["Home", "Services", "News", "Blog", "Contact"];
  var pathArray = window.location.pathname.split("/");
  console.log(pathArray[1]);

  return (
    <>
      <ul className="container-tab">
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
    </>
  );
}

export default Tab;
