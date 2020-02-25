import React from "react";

class CatCardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cat = this.props.cat
    return (
      <div className={"catCardContainer"}>
        <img src={cat.url}></img>
      </div>
    );
  }
}

export default CatCardContainer;
