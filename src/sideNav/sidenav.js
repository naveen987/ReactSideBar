import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import style from "./style.css";
import {
  faRocket,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidenav = () => {
  const sidNavHeader = [
    {
      Label: "Dashboard",
      new: faRocket,
    },
    {
      Label: "Menu 1",
      new: faRocket,
    },
    {
      Label: "Menu 2",
      new: faRocket,
    },
    {
      Label: "Menu 3",
      new: faRocket,
    },
    {
      Label: "Menu 4",
      new: faRocket,
    },
    {
      Label: "Menu 5",
      new: faRocket,
    },
    {
      Label: "Menu 6",
      new: faRocket,
    },
  ];
  const [content, setContent] = useState("");
  const [sideNav, setSideNav] = useState(true);
  return (
    <div style={{ display: "flex" }}>
      <ProSidebar className={"main"} collapsed={sideNav}>
        <h1
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "14px",
            letterSpacing: "1px",
            overFlow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "#adadad",
            borderBottom: "1px solid hsla(0,0%,67.8%,.2)",
          }}
        >
          {sideNav === false ? (
            <div style={{ display: "flex" }}>
              <FontAwesomeIcon
                onClick={() => {
                  setSideNav(true);
                }}
                size={"2x"}
                className={"styledIcon"}
                icon={faAngleDoubleLeft}
              />
              <h1
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  letterSpacing: "1px",
                  overFlow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "#adadad",
                  marginLeft: "4px",
                }}
              >
                Navigation
              </h1>
            </div>
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                setSideNav(false);
              }}
              size={"2x"}
              className={"styledIcon"}
              icon={faAngleDoubleRight}
            />
          )}
        </h1>
        {sidNavHeader.map((item) => (
          <Menu iconShape="square">
            <MenuItem
              icon={<FontAwesomeIcon icon={item.new} />}
              onClick={() => {
                setContent(item.Label);
              }}
              style={{
                padding: "10px",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "14px",
                letterSpacing: "1px",
                overFlow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: "#adadad",
              }}
            >
              {item.Label}
            </MenuItem>
          </Menu>
        ))}
        <Menu iconShape="square">
          <SubMenu style={{paddingLeft:"10px"}} icon={<FontAwesomeIcon icon={faRocket} />} title="Components">
            <MenuItem >Component 1</MenuItem>
            <SubMenu  title="Sub Component 1">
            </SubMenu>
          </SubMenu>
        </Menu>
      </ProSidebar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {content === "Dashboard" && (
          <div>
            <h1>hi</h1>
          </div>
        )}
        {content === "Menu 1" && (
          <div>
            <h1>hello</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidenav;
