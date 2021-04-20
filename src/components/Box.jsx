import React from "react";

class Box extends React.Component {
  state = {
    disable: false,
    disabled: false
  };

  handle = (e) => {
    console.log(e.target.placeholder);
    if (e.target.placeholder === "Reg") {
      this.setState({
        disable: true
      });
    } else {
      this.setState({
        disabled: true
      });
    }
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Reg"
          id=""
          onClick={this.handle}
          disabled={this.state.disabled}
        />
        <input
          type="number"
          placeholder="From"
          id=""
          onClick={this.handle}
          disabled={this.state.disable}
        />
        <input
          type="number"
          placeholder="To"
          id=""
          onClick={this.handle}
          disabled={this.state.disable}
        />
      </div>
    );
  }
}

export default Box;
