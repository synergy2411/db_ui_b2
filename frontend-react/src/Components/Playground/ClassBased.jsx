import { Component } from "react";

class ClassBased extends Component {
  state = {
    counter: 0,
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>Class based component loaded</h1>
        <button onClick={this.increaseCounter}> {this.state.counter}</button>
      </div>
    );
  }
}

export default ClassBased;
