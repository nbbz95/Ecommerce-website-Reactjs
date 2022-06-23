/* eslint-disable jsx-a11y/alt-text */
import './Navbar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../aseets/img/logo.png';



// or get all of the named exports for further usage
import * as bootstrap from 'bootstrap';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <>
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
          <div>
              <img src={logo}/>
          </div>
            <CartWidget />
            <a className="link-light" link="#">Productos</a>
            <a className="link-light" link="#">Servicios</a>
            <a className="link-light" link="#">Nosotros</a>
          </div>
        </nav>
      </div></>
    
    
  )
}

export default Navbar