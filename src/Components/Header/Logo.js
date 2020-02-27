import React from "react";
import "./header.css";
import { FaPaw } from "react-icons/fa";

class Logo extends React.Component {
  render() {
    return (

          <h1>
            <span style={{ fontSize: "4rem" }}>k</span>i
            <FaPaw className={"heartIcon"} />t
            <span style={{ fontSize: "4rem" }}>T</span>
            <div className={"inder"}>
              <span style={{ fontSize: "2rem" }}>i</span>
              <FaPaw
                className={"heartIcon"}
                style={{ left: "-1.2%", top: "28%", fontSize: "0.8rem" }}
              />
              <span style={{ letterSpacing: "-4px" }}>nder</span>
            </div>
          </h1>
    );
  }
}
export default Logo;
