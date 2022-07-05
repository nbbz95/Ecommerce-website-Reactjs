import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function Card (){

    return (
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="" />
    <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary"></Button>
    </Card.Body>
        </Card>
);
}

export default Card ;