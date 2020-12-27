import {Link} from 'react-router-dom'

function AuthorProfile({author: {name, designation, picture, _id}}){
  return(
  <div className="author-profile">
    <figure>
      <img src={picture} alt={name+'-'+designation} className="profile-img img-fluid"/>
      <figcaption>
        <Link to={`/profile/${_id}`} className="author-name"><h3>{name}</h3></Link>
        <p className="author-designation">{designation}</p>
      </figcaption>
    </figure>
  </div>
  )
}

export default AuthorProfile;