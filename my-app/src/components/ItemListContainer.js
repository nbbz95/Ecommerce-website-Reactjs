import{useEffect, useState} from 'react';
import './ItemListContainer.css'
import Item from './Item';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function ItemListContainer (){

  const[info, setInfo] = useState([])

  useEffect(() => {
    setTimeout(() =>
    fetch('data.json')
    .then((resp) => resp.json())
    .then((data) => setInfo(data)),
  3000
  );
  }, [])

return (
  <>

      {info && info.map(i => <Item id={i.nombre} imagen={i.imagen} precio={i.precio} descripcion={i.descripcion} />)}

  </>
)
    }

export default ItemListContainer;


