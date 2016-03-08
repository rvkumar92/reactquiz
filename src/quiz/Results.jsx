import React, {Component} from 'react';
import Question from './Question.jsx';
class Results extends Component {
    render(){
        var percentage = (this.props.score / this.props.questions.length * 100);
        if(percentage > 60 ){
            var message = "You did an Awesome job!";
            var css = "text-success";
        }else{
            var message = "You did Horrible job!";
            var css = "text-danger"
        }
        return(
            <div className="well">
                <h4> You got {this.props.score} out of {this.props.questions.length} correct.</h4>
                <span className={css}><h1>{percentage}% - {message}</h1></span>
                <hr />
                <a href="/app">Take Again!</a>
            </div>
        )
    }
}
export default Results;