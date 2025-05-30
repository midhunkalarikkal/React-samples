import React from "react"
class Sample extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount(){

    }

    compoenentDiUpdate(prevProps, prevState){      
        if(prevState.count !== this.state.count){
            console.log("Count updated");
        }  
    }
    
    compoenentWillUnmount(){
        
    }
    
    handleButtonClick = () => {
        this.setState({ count :  this.state.count + 1 })
    }

    render(){
        return(
            <>
            <h1>Hi Iam class compoenent</h1>
            <p>Count : {this.state.count}</p>
            <button onClick={this.handleButtonClick}>Click me</button>
            </>
        )
    }
}