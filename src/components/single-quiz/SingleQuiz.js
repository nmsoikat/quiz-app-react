
function SingleQuiz(props){
  let {quizTitle, quizDesc, author: {name, designation, picture}} = props;
  return(
    <div className="single-quiz">
      <div className="author-profile">
        <figure>
          <img src={picture} alt={name} className="profile-img img-fluid"/>
          <figcaption>
            <a href="#" className="author-name"><h3>{name}</h3></a>
            <p className="author-designation">{designation}</p>
          </figcaption>
        </figure>
      </div>
      <div className="quiz-detail">
        <a href="#" className="quiz-title"><h2>{quizTitle}</h2></a>
        <p className="quiz-desc">
          {quizDesc}
        </p>
      </div>
  </div>
  )
}

export default SingleQuiz;