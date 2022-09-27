import React from "react";
import PropTypes from 'prop-types'

class Typer extends React.Component {
    
    constructor(props) {
        super(props);
        this.myTag = props.text;
        this.state = { tag: "",tagHidden:this.myTag, tagPosition:0, blinkClass: "blinky" };
    }
    

    tick() {
        clearInterval(this.interval)

        this.setState(state => ({
            tag: this.myTag.substring(0, state.tagPosition),
            tagPosition: state.tagPosition + 1,
            blinkClass: ''
        }));
        if(this.state.tagPosition < this.myTag.length) {
            let time = Math.floor(Math.random()*150) + 50;
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
            <div className="typer">
                <span className="text">
                    <span>{this.state.tag}</span>
                    <span style={{width: '1px', overflow: 'hidden', display: 'inline-block'}}> </span>
                    <span className={this.state.blinkClass}>&#124;</span>
                </span>
                <span className="blinky">{this.state.tagHidden}&#124;</span>
            </div>
        )
    }
}

Typer.propTypes = {
    text: PropTypes.string.isRequired
  }

export default Typer
