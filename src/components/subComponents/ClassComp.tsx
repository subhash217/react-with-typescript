import React, { Component } from "react";

type selesctState = {
  selectBox: string;
};
export default class ClassComp extends Component<any, selesctState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectBox: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: any) {
    this.setState({ selectBox: event.target.value });
  }
  renderHandle = (result: any) => {
    if (result === "classOne") {
      return <ClassOne />;
    } else {
      return <ClassTwo />;
    }
  };
  render() {
    return (
      <div>
        <label>Select Class:</label>
        <select value={this.state.selectBox} onChange={this.handleChange}>
          <option>--select--</option>
          <option value="classOne">ClassOne</option>
          <option value="classTwo">ClassTwo</option>
        </select>
        {this.renderHandle(this.state.selectBox)}
      </div>
    );
  }
}

class ClassOne extends Component {
  componentDidMount() {
    console.log("classOne Mounted..!!");
  }
  componentWillUnmount() {
    console.log("classOne UnMounted...");
  }
  render() {
    return <div>Class One</div>;
  }
}

class ClassTwo extends Component {
  componentDidMount() {
    console.log("classTwo Mounted..!!");
  }
  componentWillUnmount() {
    console.log("classTwo UnMounted...");
  }
  render() {
    return <div>Class Two</div>;
  }
}
