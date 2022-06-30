import './ItemCount.css';
import { useState } from "react"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'



function Contador({ stock }){
    const [num, setNum] = useState(0);

    const sumar = () => {
        if(num < stock){
        setNum(num + 1)
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'No hay stock disponible',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
}
    const resta = () => {
        if(num>0){
        setNum(num - 1)
    }
}
    const reiniciar = () =>{
    setNum(0)
}

return(
<>
<div className='card p-3 mb-2 bg-secondary text-white'>
<div className='d-flex justify-content-center'>
</div>
<div className='d-flex justify-content-center'>
    
    <p>{num}</p><br/>
</div>

<div className='d-flex justify-content-center'>
    
    <p>Stock disponible: {stock} unidades</p>

</div>

<div className='d-flex justify-content-center'>

    <button className='btn btn-primary' onClick={sumar}>Sumar</button>
    <button className='btn btn-primary' onClick={resta}>Restar</button>
    <button className='btn btn-primary' onClick={reiniciar}>Reiniciar!</button>

</div>
</div>
</>
    )
}



export default Contador;