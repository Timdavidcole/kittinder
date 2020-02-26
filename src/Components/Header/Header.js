import React from "react";
import "./header.css";
import { FaPaw } from "react-icons/fa";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          ki<FaPaw className={"heartIcon"} />t
          <span style={{ fontSize: "4rem" }}>Tinder</span>
        </h1>
      </header>
    );
  }
}

export default Header;
