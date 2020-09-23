import React, { Component } from "react";

interface checkState {
  data: Array<any>;
}

export class CheckboxExample extends Component<any, checkState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        { id: 1, message: "Hello", checkIn: false },
        { id: 2, message: "Good", checkIn: false },
        { id: 3, message: "Morning", checkIn: false },
      ],
    };
  }

  checkChange = (e: any) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const result = [];

    this.setState({ data: [...this.state.data] });
  };
  componentDidMount() {
    console.log("classOne Mounted..!!");
  }
  componentWillUnmount() {
    console.log("classOne UnMounted...");
  }
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={item.checkIn}
                onChange={(e) => this.checkChange(e)}
              />
              <span
                style={{
                  textDecoration: item.checkIn ? "line-through" : "none",
                }}
              >
                {item.message}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
