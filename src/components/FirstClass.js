import { Component } from "react";
import SecondClass from "./SecondClass";

class FirstClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name : ""
    }
    console.log("First constructor");
  }

  componentDidMount() {
    console.log("First componentDidMount");
    this.setState({
        name : this.props.name
    })
  }

  componentWillUnmount(){
    console.log("First componentWillMount")
  }

  render() {
    console.log("First render");
    return (
      <div>
        <h1>First class propName : {this.props.name}</h1>;
        <SecondClass name={"Second"}/>
      </div>
    );
  }
}

export default FirstClass;
