import{useEffect, useState, React} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css";

function ItemDetailContainer(props) {
    const [descriptionFetch, setDescriptionFetch] = useState ([])

    useEffect(() => {
        setTimeout(() => {
            fetch('/my-app/public/data.json')
            .then((res) => res.json())
            .then((data) => setDescriptionFetch (data.filter((i) => i.id === 1)));

    }, 2000)

}, []);

return (
<>
        <Container fluid>
            <Row>
                <Col>
                    <ItemDetail productDetail={descriptionFetch}/>
                </Col>
            </Row>
        </Container>
</>

    );
}

export default ItemDetailContainer;