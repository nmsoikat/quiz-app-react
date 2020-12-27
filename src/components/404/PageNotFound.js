import {Link} from 'react-router-dom'

function PageNotFound(){
  return (
  <div className="quiz-detail text-center my-5">
    <h2 className="text-danger my-5"> 404 Page Not Found</h2>
    <Link to="/" className="text-success">Home</Link>
  </div>
  )
}

export default PageNotFound;