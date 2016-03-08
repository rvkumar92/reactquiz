import React, {Component} from 'react';

class Question extends Component {
    onChange(e){
        return;
    }
    render(){
        const {question} = this.props;
        return(
            <div className="well">
                 <h3>{question.text}</h3>
                <hr />
                <ul className="list-group">
                    {
                        question.choices.map(choice => {
                            return <li className="list-group-item" key={choice.id}>{choice.id}<input type="radio" name={question.id} onChange={this.onChange.bind(this)} value={choice.id}/>{choice.text}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Question;