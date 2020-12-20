import react from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './partial/header/Header'
import Footer from './partial/footer/Footer'
import SingleQuiz from './single-quiz/SingleQuiz'


class App extends react.Component{

  state = {
    profile:[
      { _id:'1', name:'Solim', email: 'solim@gmail.com', password:'12345', picture:''}
    ],
    quiz:[
      {
        title:"This is first quiz",
        description: "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ex, alias reiciendis labore unde excepturi aspernatur velit ipsum quia officia illum aut minus accusamus veritatis quod laboriosam mollitia dolor aliquid?",
        questions:[
          {question:"Question 1", options:['option a', 'option b'], answer: 'option a'},
          {question:"Question 2", options:['option a', 'option b'], answer: 'option a'}
        ],
        author: { _id:'1', name:'Solim', designation:'Front-End Developer', email: 'solim@gmail.com', password:'12345', picture:'upload/me.jpg'}
      },
      {
        title:"This is first quiz2",
        description: "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ex, alias reiciendis labore unde excepturi aspernatur velit ipsum quia officia illum aut minus accusamus veritatis quod laboriosam mollitia dolor aliquid?",
        questions:[
          {question:"Question 1", options:['option a', 'option b'], answer: 'option a'}
        ],
        author: { _id:'2', name:'Rohim', designation:'Back-End Developer', email: 'solim@gmail.com', password:'12345', picture:'upload/me.jpg'}
      }
    ]
  }

  render(){
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={ () => (
            <main>
              <div className="quiz-area">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      {this.state.quiz.map((item, key) => {
                        return <SingleQuiz key={key} author={item.author} quizTitle={item.title} quizDesc={item.description}/>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          )}/>

          <Route path="/quiz/:id"/>
          <Route path="/create-quiz"/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }

}


export default App;

