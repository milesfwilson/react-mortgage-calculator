import React, { Component } from "react";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { values: { amount: 250000, interest: 5.6, time: 30 } };
  }
  handleChange = (event) => {
    this.setState({ values: event.target.value });
  };

  render() {
    const values = this.state.values;
    return (
      <div className="row">
        <div className="col-12">
          <input
            type="number"
            onChange={this.handleChange}
            value={values.amount}
          />
          <input
            type="number"
            onChange={this.handleChange}
            value={values.interest}
          />
          <input
            type="number"
            onChange={this.handleChange}
            value={values.time}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
