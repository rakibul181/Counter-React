import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  }

  formatCount = () => {
    if (this.state.counter === 0) return 'Zero';
    return this.state.counter;
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {
    return (
      <>
        

        

        <ul>
          <li className="list-unstyled">
            <div>
              <span className="badge bg-primary">{this.formatCount()}</span>
              <button onClick={this.handleIncrement} type="button" className="btn btn-secondary m-2">+</button>
              <button onClick={this.handleDecrement} type="button" className="btn btn-secondary m-2">-</button>
              <button type="button" className="btn btn-danger m-2">Delete</button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default Counter;

//<button type="button" className="btn btn-primary m-4">Reset</button>