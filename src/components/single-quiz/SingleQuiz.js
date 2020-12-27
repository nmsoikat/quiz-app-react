import AuthorProfile from '../author-profile/AuthorProfile'
import QuizDesc from '../quiz-desc/QuizDesc'

function SingleQuiz(props){
  let {quizId, quizTitle, quizDesc, author} = props;
  return(
    <div className="single-quiz">
      <AuthorProfile author={author}/>
      <QuizDesc quizId={quizId} quizTitle={quizTitle} quizDesc={quizDesc}/>
  </div>
  )
}

export default SingleQuiz;