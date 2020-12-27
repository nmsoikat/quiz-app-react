import react from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import store from '../class/MyState';

import Header from './partial/header/Header'
import Footer from './partial/footer/Footer'
import SingleQuiz from './single-quiz/SingleQuiz'
import Profile from './profile/Profile'
import CreateQuiz from './create-quiz/CreateQuiz'
import QuizOpen from './quiz-open/QuizOpen'
import PageNotFound from './404/PageNotFound'

class App extends react.Component{

  state = store.getAllData();

  saveQuestion = (completeQuestion) => {
    this.setState(prev => {
      let prev_quiz = [...prev.quiz];
      prev_quiz.push(completeQuestion)
      return {
        quiz: prev_quiz
      }
    })
  }

  render(){
    return (
      <BrowserRouter>
        <Header/>
          <main>
            <Switch>

              <Route exact path="/" component={ () => (
                <div className="quiz-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        {this.state.quiz.map((item, key) => {
                          return <SingleQuiz key={key} author={item.author} quizTitle={item.title} quizDesc={item.description} quizId={item._id}/>
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}/>

              <Route path="/profile/:id" component={(props) => {
                let singleAuthor = this.state.profile.filter((author) => {
                  if(author._id === props.match.params.id)
                  return author;
                })
                let authorAllQuiz = this.state.quiz.filter((quiz) => {
                  if(quiz.author._id === props.match.params.id)
                  return quiz;
                })
                return <Profile author={singleAuthor[0]} authorAllQuiz={authorAllQuiz} />
              }}/>

              <Route path="/quiz/:id" component={(props) => {
                let singleQuiz = this.state.quiz.filter(qz => {
                  if(qz._id === props.match.params.id){
                    return qz;
                  }
                })
                // console.log(singleQuiz);
                return <QuizOpen singleQuiz={singleQuiz[0]}/>
              }}/>

              <Route path="/create-quiz" component={() => {
                return <CreateQuiz saveQuestion={this.saveQuestion}/>
              }} />

              <Route component={PageNotFound}/>

            </Switch>
          </main>
        <Footer/>
      </BrowserRouter>
    )
  }

}


export default App;

