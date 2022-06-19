import './Navbar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



// or get all of the named exports for further usage
import * as bootstrap from 'bootstrap';

function Navbar() {
  return (

    <div className="container">
  <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
    <img src="/my-app/public/img/logo.png"/>
    <a className="link-light" link="#">Home</a>
    <a className="link-light" link="#">FunkoPOP</a>
    <a className="link-light" link="#">Mangas</a>
    <a className="link-light" link="#">Figuras</a>
    </div>
  </nav>
</div>
    
    
  )
}

export default Navbar