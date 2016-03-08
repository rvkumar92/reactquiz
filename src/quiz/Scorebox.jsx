import React, {Component} from 'react';
import Question from './Question.jsx';

class Scorebox extends Component {
    render(){
        return(
            <div className="well">
                Question {this.props.current} out of {this.props.questions.length}
                <span className="pull-right">Score: {this.props.score}</span>
            </div>
        )
    }
}
export default Scorebox;