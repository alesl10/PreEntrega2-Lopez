import ItemCount from "../ItemCount";
import { Container } from "react-bootstrap";
import "./itemdetail.css";

function ItemDetail({ producto }) {
  const onAdd = (cant) => {
    console.log("Se agregaron " + cant);
  };
  return (
    <article>
      <Container >
        <div className="contenedorGeneral">
          <div >
          <img className="imgProdu"
            src={producto.img}
            alt="imagen de producto"
          />
        </div>
        
        <div className="informacion" >
          <h2>{producto.name}</h2>
          <p>{producto.descripcion}</p>
          <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
        </div>
      </Container>
    </article>
  );
}

export default ItemDetail;
