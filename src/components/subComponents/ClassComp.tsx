import React, { Component } from "react";
import { TodoApp, CheckboxExample } from "./ClassComponents/index";
import { selectState } from "../../models/select";

import "./ClassComp.css";
import jsonData from "../../list.json";

export class ClassComp extends Component<any, selectState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectBox: "",
      text: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: any) {
    this.setState({ selectBox: event.target.value });
    this.setState({ text: true });
  }
  renderHandle = (result: any) => {
    if (result === "") {
      return null;
    } else if (result === "CheckboxExample") {
      return <CheckboxExample />;
    } else {
      return <TodoApp />;
    }
  };
  render() {
    const { selectBox, text } = this.state;
    return (
      <div>
        <label>Select Class Examples:</label>
        <select value={selectBox} onChange={this.handleChange}>
          <option value="">--select--</option>
          <option value="CheckboxExample">CheckboxExample</option>
          <option value="TodoApp">TodoApp</option>
        </select>
        {text && this.renderHandle(selectBox)}
        <SelectDropdown />
      </div>
    );
  }
}

type Select = {
  countries: Array<string>;
  dropdown: boolean;
};
class SelectDropdown extends Component<any, Select> {
  state = {
    countries: [],
    dropdown: true,
  };

  render() {
    return (
      <div>
        <div>
          <label>Select Countries:</label>
          <select>
            <option>--select--</option>
            {jsonData.countries.map((item, i) => {
              return <option key={i}>{item}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Select States:</label>
          <select disabled={this.state.dropdown}>
            <option>AP</option>
          </select>
        </div>
      </div>
    );
  }
}
