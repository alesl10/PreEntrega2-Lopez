import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemsListContainer";
import { useParams } from "react-router-dom";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <div className="contenedor">
      <NavBar /> 
      <ItemListContainer 
      isCategoryRoute={isCategoryRoute}
      categoryId={params.id}/>  
    </div>
  );
}

export default Root;
