import React from "react";
const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class newComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        <OriginalComponent
          name={"Sanju"}
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return newComponent;
};
export default UpdatedComponent;
