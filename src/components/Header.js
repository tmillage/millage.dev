import React from "react";
import Typer from "./Typer";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
      <h1>Taylor Millage, Software Developer</h1>
      <h2><Typer text="I make web pages do cool stuff... A resume built in React.js, hosted on AWS." /></h2>
      </header>
    )
  }
}

export default Header
