import {Link} from 'react-router-dom'

function QuizDesc({quizId, quizTitle, quizDesc, bio}){
  console.log("_ID::",quizId);
  return (
  <div className="quiz-detail">
    {quizTitle && <Link to={`/quiz/${quizId}`} className="quiz-title"><h2>{quizTitle}</h2></Link>}
    <p className="quiz-desc">{quizDesc ? quizDesc : bio}</p>
  </div>
  )
}

export default QuizDesc;