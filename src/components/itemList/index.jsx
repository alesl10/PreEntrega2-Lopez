import Item from "../Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function ItemList ({productos}){
    return <Container > 
        <Row className='gap-5'>
            {productos.map((elemento,index) =>(<Item producto={elemento} key={elemento.id}/>))}
        </Row>      
    </Container>
}
export default ItemList;