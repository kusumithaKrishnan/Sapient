import React, { Component } from "react";
import Content from "../../components/content";
class AppHome extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>SpaceX Launch Programs</h1>
        </header>
        <Content />
      </div>
    );
  }
}

export default AppHome;
