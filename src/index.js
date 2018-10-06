import React, { Component } from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";
import sal from "sal.js";

import randomColors from "./utils/randomColors";

import "./styles.scss";

library.add(faCoffee, faHeart);

const salTypes = [
  "fade",
  "slide-up",
  "slide-down",
  "slide-left",
  "slide-right",
  "zoom-in",
  "zoom-out",
  "flip-up",
  "flip-down",
  "flip-left",
  "flip-right"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salType: salTypes[Math.floor(Math.random() * 10)],
      options: {
        once: false
      }
    };
  }

  componentDidMount() {
    sal({
      ...this.state.options
    });
  }

  handleChange(e) {
    this.setState({
      salType: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Sal</h1>
        <p>https://github.com/mciastek/sal</p>
        <p>
          This repo is created by <a href="https://calpa.me/">Calpa Liu</a>
          <br />
          Refresh or input the animation to see another animation effect
        </p>
        SalType:
        <input
          type="text"
          value={this.state.salType}
          onChange={e => this.handleChange(e)}
        />
        {Array(1000)
          .fill(1)
          .map((item, index) => (
            <div
              data-sal={this.state.salType}
              data-sal-delay="0"
              data-sal-easing="ease"
              className="icon"
            >
              <FontAwesomeIcon
                transform={{ rotate: index * 42 }}
                color={randomColors()}
                icon={["fas", "heart"]}
              />
              <FontAwesomeIcon
                transform={{ rotate: index * 42 }}
                color={randomColors()}
                icon={["fas", "heart"]}
              />
            </div>
          ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
