import ItemCount from './ItemCount'
import './Item.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Item({id, imagen, nombre, precio, descripcion}){
  return(
    <div className="card">
    <div className="container">
        <h4><b>{id}</b></h4>
        <img src={imagen} alt={nombre} />
        <p>{precio}</p>
        <button>{descripcion}</button>
        <ItemCount />
    </div>
  </div>
 );
}
export default Item;