import AuthorProfile from '../author-profile/AuthorProfile'
import TitleOrBio from '../quiz-desc/Quiz-Desc'

function Profile({author, authorAllQuiz}){
  return (
  <div className="profile-area">
    <div className="container">
      <div className="profile-detail">
        <div className="profile-detail__left">
          <AuthorProfile author={author}/>
        </div>
        <div className="profile-detail__right">
          <TitleOrBio bio={author.bio}/>
        </div>
      </div>
      
      <div className="author-quiz">
        {
          authorAllQuiz.map((quiz) => {
            return <TitleOrBio quizTitle={quiz.title} quizDesc={quiz.description}/>
          })
        }
      </div>
    </div>
  </div>
  )

}

export default Profile;