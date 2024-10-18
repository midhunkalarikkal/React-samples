import { Component } from "react";

class ThirdClass extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Third constructor");
  }

  componentDidMount() {
    console.log("Third componentDidMount");
  }

  render() {
    console.log("Third render");
    return <h1>Third class</h1>;
  }
}

export default ThirdClass;
