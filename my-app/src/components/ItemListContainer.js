import './ItemListContainer.css'
import 'bootstrap';

// or get all of the named exports for further usage
import * as bootstrap from 'bootstrap';

function ItemListContainer (){
    return (
      <>
        <div className='div-ItemListContainer text-center'>
          <h3>Catalogo de productos</h3>
          <p>Elige tus productos de esta lista:</p>
        </div>
      </>
  )
  }

export default ItemListContainer;