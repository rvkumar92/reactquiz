import React, {Component} from 'react';
import Question from './Question.jsx';
class QuestionsList extends Component {
    render(){
        return(
            <div className="questions">
                {
                    this.props.questions.map(question => {
                        return <Question question={question} key={question.id}
                            {...this.props}
                        />
                    })
                }
            </div>
        )
    }
}
export default QuestionsList;