import React from 'react';
import { withRouter } from "react-router";
class Sop extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            apple:'apple',
            banana:'banana'
        }
        this.nextPath = this.nextPath.bind(this);
        this.changeApple = this.changeApple.bind(this);
    }
    changeApple(){
        this.setState({
            banana:'banana'
        })
    }
    nextPath(path){
        this.props.history.push(path);
    }

    render(){
        return(
            <div>
                <button onClick={() => this.nextPath('/SampleSop')}>Sample Sop</button>
                <button onClick={() => this.nextPath('/CreateSop')}>Create Sop</button>
                <button onClick={this.changeApple}>banana</button>
            </div>
        )
    }
}

export default withRouter(Sop);