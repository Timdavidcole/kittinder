import React from "react";
import "./header.css";
import { FaPaw } from "react-icons/fa";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <span style={{ fontSize: "4rem" }}>k</span>i
          <FaPaw className={"heartIcon"} />t
          <span style={{ fontSize: "4rem" }}>T</span>
          <div className={"inder"}>
            <span style={{ fontSize: "2rem" }}>i</span>
            <FaPaw
              className={"heartIcon"}
              style={{ left: "-1.5px", top: "16px", fontSize: "0.8rem" }}
            />
            <span style={{ letterSpacing: "-4px" }}>nder</span>
          </div>
        </h1>
      </header>
    );
  }
}
export default Header;
