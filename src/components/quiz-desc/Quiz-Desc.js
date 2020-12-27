function QuizDesc({quizTitle, quizDesc, bio}){
  return (
  <div className="quiz-detail">
    {quizTitle && <a href="#" className="quiz-title"><h2>{quizTitle}</h2></a>}
    <p className="quiz-desc">{quizDesc ? quizDesc : bio}</p>
  </div>
  )
}

export default QuizDesc;