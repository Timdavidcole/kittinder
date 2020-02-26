import React from "react";
import shuffle from "../../Models/shuffle";
import CatCard from "./CatCard";


class CatCardContainer extends React.Component {
  render() {
    var breeds = this.props.cats
    return (
      <div className="catCardContainer" style={{ padding: "10px" }}>
        {shuffle(breeds).map((cat, index) => {
          return <CatCard cat={cat} key={index} />;
        })}
      </div>
    );
  }
}

export default CatCardContainer;
