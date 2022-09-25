import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.myTag = "I make web pages do cool stuff... A resume built in React.js, hosted on AWS.";
    this.state = { tag: "",tagHidden:this.myTag, tagPosition:0, blinkClass: "blinky" };
  }

  tick() {
    clearInterval(this.interval)

    this.setState(state => ({
      tag: this.myTag.substring(0, state.tagPosition),
      tagHidden: this.myTag.substring(state.tagPosition),
      tagPosition: state.tagPosition + 1,
      blinkClass: ''
    }));
    if(this.state.tagPosition < this.myTag.length) {
      let time = Math.floor(Math.random()*150) + 100;
      console.log(this.state.tag.length, this.myTag.length,time)
      this.timeout = setTimeout(() => this.tick(), time)
    } else {
      this.interval = setInterval(() => this.blink(), 500);
    }
  }

  blink() {
    this.setState(state => ({
      blinkClass: (state.blinkClass == ''?'blinky':'')
    }));
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.tick(), 3000);
    this.interval = setInterval(() => this.blink(), 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    clearInterval(this.interval)
  }

  render() {
    return (
      <header>
      <h1>Taylor Millage, Software Developer</h1>
      <h2>{this.state.tag}<span className={this.state.blinkClass}>&#124;</span><span className="blinky">{this.state.tagHidden}</span></h2>
      </header>
    )
  }
}

export default Header
