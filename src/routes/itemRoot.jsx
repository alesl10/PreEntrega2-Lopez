import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

function ItemRoot() {
  const parametros = useParams();
  return (
    <main className="contenedor">
      <NavBar /> 
      <ItemDetailContainer itemId={parametros.id}/>  
    </main>
  );
}

export default ItemRoot;
