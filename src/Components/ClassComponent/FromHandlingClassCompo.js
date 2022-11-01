import React, { Component } from "react";

class FromHandlingClassCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      select: "Angular",
    };
  }

  HandleUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  HandleComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  HandleSelect = (event) => {
    this.setState({
      select: event.target.value,
    });
  };

  HandleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.select} ${this.state.comments}`);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Learning Handling of form in class components</h1>
        <form onSubmit={this.HandleSubmit}>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.HandleUserName}
            ></input>
          </div>
          <br />
          <div>
            <label>Comments</label>
            <textarea
              type="text"
              value={this.state.comments}
              onChange={this.HandleComments}
            ></textarea>
          </div>
          <br />
          <div>
            <label>Select</label>
            <select value={this.state.select} onChange={this.HandleSelect}>
              <option value="react">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FromHandlingClassCompo;
