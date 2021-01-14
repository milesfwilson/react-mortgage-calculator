import React, { Component } from "react";

class App extends Component {
  state = {
    values: {
      amount: 250000,
      interest: 5.5,
      time: 15,
    },
  };

  handleAmountChange = (event) => {
    const values = this.state.values;
    values.amount = event.target.value;

    this.setState({ values });
  };

  handleInterestChange = (event) => {
    const values = this.state.values;
    values.interest = event.target.value;

    this.setState({ values });
  };

  handleTimeChange = (event) => {
    const values = this.state.values;
    values.time = event.target.value;

    this.setState({ values });
  };

  handleBalance = (amount, interest, time) => {
    const r = (interest * 0.01) / 12;
    const n = time * 12;
    const p = amount;

    const balance = ((r * p * n) / (1 - Math.pow(1 + r, -n))).toFixed(2);

    return balance;
  };
  handlePayment = (amount, interest, time) => {
    const r = (interest * 0.01) / 12;
    const n = time * 12;
    const p = amount;

    const balance = ((r * p * n) / (1 - Math.pow(1 + r, -n))).toFixed(2);

    return (balance / n).toFixed(2);
  };

  render() {
    const { values } = this.state;
    return (
      <div className="container-fluid bg-dark text-light vh-100">
        <div className="row pt-5">
          <div className="col-12">
            <form action="">
              <div className="row">
<div className="col-6">
  <h3 className="float-right">
    Loan Amount
  </h3>
</div>
<div className="col-6">


              <input className="form-control w-50"
                type="number"
                min="0"
                onChange={this.handleAmountChange}
                value={values.amount}
                />
                </div>
                </div>
                <div className="row">
<div className="col-6">
  <h3 className="float-right">
  Interest Rate
  </h3>
</div>
<div className="col-6">

              <input className="form-control w-50"
                type="number"
                min="1"
                onChange={this.handleInterestChange}
                value={values.interest}
                />
                </div>
                </div>
                <div className="row">
<div className="col-6">
  <h3 className="float-right">
  Loan Term
  </h3>
</div>
<div className="col-6">

<select name="" id="" value={values.time} onChange={this.handleTimeChange}>
  <option value="15">15</option>
  <option value="30">30</option>
</select>
</div>

                </div>
           
            </form>
          </div>
        </div>
        <h3 className="text-center ">
          Monthly Payment: $
          {this.handlePayment(values.amount, values.interest, values.time)}
        </h3>
        <h3 className="text-center ">
          Total Balance: $
          {this.handleBalance(values.amount, values.interest, values.time)}
        </h3>
      </div>
    );
  }
}

export default App;
