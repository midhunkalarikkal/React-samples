import { Component } from "react";
import ThirdClass from "./ThirdClass";

class SecondClass extends Component {
    constructor(props) {
    super(props);
    console.log("Second constructor");
  }

  componentDidMount() {
    console.log("Second componentDidMount");
  }

  render() {
    console.log("Second render");
    return (
        <div>
            <h1>Second class</h1>;
            <ThirdClass name={"Third"} />
        </div>
    ) 
  }
}

export default SecondClass;
