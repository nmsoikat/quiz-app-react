import AuthorProfile from '../author-profile/AuthorProfile'
import QuizDesc from '../quiz-desc/Quiz-Desc'

function SingleQuiz(props){
  let {quizTitle, quizDesc, author} = props;
  return(
    <div className="single-quiz">
      <AuthorProfile author={author}/>
      <QuizDesc quizTitle={quizTitle} quizDesc={quizDesc}/>
  </div>
  )
}

export default SingleQuiz;