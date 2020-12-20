import {NavLink} from 'react-router-dom'

function Nav(){
  return(
    <nav>
      <ul>
        <li><NavLink exact activeClassName="nav-link-active" to="/">Home</NavLink></li>
        <li><NavLink  activeClassName="nav-link-active" to="/create-quiz">Create Quiz</NavLink></li>
        <li><NavLink  activeClassName="nav-link-active" to="/profile">Profile</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;