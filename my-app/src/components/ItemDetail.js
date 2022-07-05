import{ React } from 'react';
import { Card } from 'react-bootstrap';


function ItemDetail ({props}) {

return (
<>

<Card>
    <Card.Body>
    <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
        <Card.Text>{props.stock}</Card.Text>
        <Card.Text>{props.descuento}</Card.Text>
    </Card.Body>
</Card>


</>


    );
}

export default ItemDetail;