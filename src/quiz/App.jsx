import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.state({
            question: [
                id:
            ],
            score: 0,
            current: 0
        })
    }
    render(){
        return(
            <div>
                App
            </div>
        )
    }
}
App.propsType = {

}

export default App;