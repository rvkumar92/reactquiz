import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionsList from './QuestionsList.jsx'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices:[
                        {
                            id:'a',
                            text:'Vijay'
                        },
                        {
                            id:'b',
                            text:'Goku'
                        },
                        {
                            id:'c',
                            text:'NA'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id: 2,
                    text: 'Who won cricket AsiaCup 2016 ?',
                    choices:[
                        {
                            id:'a',
                            text:'Srilanka'
                        },
                        {
                            id:'b',
                            text:'Bangladesh'
                        },
                        {
                            id:'c',
                            text:'India'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 3,
                    text: 'Who is Thala in Tamil Film Industry?',
                    choices:[
                        {
                            id:'a',
                            text:'Rajini'
                        },
                        {
                            id:'b',
                            text:'Ajith'
                        },
                        {
                            id:'c',
                            text:'Kamal'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 4,
                    text: 'Is Goku a Super Saiyan?',
                    choices:[
                        {
                            id:'a',
                            text:'NA'
                        },
                        {
                            id:'b',
                            text:'Yes'
                        },
                        {
                            id:'c',
                            text:'No'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 5,
                    text: 'Vijay currently lives in ?',
                    choices:[
                        {
                            id:'a',
                            text:'Chennai'
                        },
                        {
                            id:'b',
                            text:'Bangalore'
                        },
                        {
                            id:'c',
                            text:'Thanjavur'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 0
        }
    }
    render(){
        return(
            <div>
                <QuestionsList {...this.state} />
            </div>
        )
    }
}
export default App;