import Button from '../../button/Button'
import Nav from '../nav/Nav'


function Header(){
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="logo">Quiz</h2>
          </div>
          <div className="col-md-8 text-right">
            <Nav />
            <Button style="btn btn-warning btn-sm mr-2" text="Login"/>
            <Button style="btn btn-primary btn-sm" text="Register"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;