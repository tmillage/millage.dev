import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.myTag = "I make web pages do cool stuff";
    this.state = { tag: "" };
  }

  tick() {
    this.setState(state => ({
      tag: this.myTag.substring(0, state.tag.length+1)
    }));
    if(this.state.tag.length >= this.myTag.length) {
      clearInterval(this.interval)
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <header>
      <h1>Taylor Millage, Software Developer</h1>
      <h2>{this.state.tag}&nbsp;</h2>
      </header>
    )
  }
}

export default Header
