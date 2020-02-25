import React from "react";

class CatCardContainer extends React.Component {

  render() {
    const cat = this.props.cat
    return (
      <div className={"catCardContainer"}>
        <img src={cat.url} alt={''}></img>
      </div>
    );
  }
}

export default CatCardContainer;
