import { NavLink } from "react-router-dom";
import "./item.css"
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Context} from '../../context'
import { useContext } from 'react';


function Item ({producto}){
 
const {onAdd, onRemove} = useContext(Context);

    return <Col xs={3} className="card"> 
        <img src={producto.img} alt="" className="imgLista"/>
        <p>{producto.name}</p>
        <p className="producDescription">{producto.descripcion}</p>       
        <Button variant="dark"><NavLink to={`/item/${producto.id}`}>Ver Detalle</NavLink>  </Button>
        <Button variant="dark" onClick={onAdd}>Agregar a carrito</Button>
        <Button variant="dark" onClick={onRemove}>Remover de carrito</Button>
        
            
        
    </Col>
    
}
export default Item;