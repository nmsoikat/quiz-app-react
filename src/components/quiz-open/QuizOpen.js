import AuthorProfile from '../author-profile/AuthorProfile'
import QuizDesc from '../quiz-desc/QuizDesc'
import SingleQA from '../single-qa/SingleQA'

function QuizOpen({singleQuiz: {_id, title, description, questions}}){
  console.log(questions);
  return(
    <div className="quiz-open-wrap">
      <div className="container">
        <div className="single-quiz">
          {/* <AuthorProfile author={author}/> */}
          <QuizDesc quizId={_id} quizTitle={title} quizDesc={description}/>

          <button className="btn btn-success my-3">Start Quiz</button>
        </div>
        <div className="show-all-questions box-style">
          <h2 className="text-center my-3">MCQ</h2>
          <SingleQA questions={questions}/>

          <button className="btn btn-warning my-3">Submit Answer</button>
        </div>
      </div>
    </div>

  )
}

export default QuizOpen;