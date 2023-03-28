import ItemCount from "../ItemCount";
import { Container } from "react-bootstrap";
import "./itemdetail.css";
import { useContext, useState } from 'react';
import { Context } from '../../context';
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {

  const [added, setAdded] = useState(0);

  const { onAdd } = useContext(Context)

  function onAddProducto(cant) {
    setAdded(cant);
    onAdd(producto, cant)
  }


  return (
    <Container>
      <div>
        <div className="contenedorGeneral">
          <div >
            <img className="imgProdu"
              src={producto.img}
              alt="imagen de producto"
            />
          </div>

          <div className="informacion" >
            <h2>{producto.name}</h2>
            <p>Precio: $ {producto.precio}</p>
            <span>{producto.descripcion}</span>
            <span>Stock: {producto.stock}</span>

            <div>
              {added == 0 && (
                <ItemCount stock={producto.stock} onAdd={onAddProducto} />
              )}
              <div>
                {added >= 1 && (
                  <Link to="/cart">
                    <button>Terminar compra</button>
                  </Link>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </Container>
  );
}

export default ItemDetail;
